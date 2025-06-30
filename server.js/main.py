from flask import Flask, request, jsonify
from datetime import datetime
import pickle
import getpass
from pymongo import MongoClient
import pandas as pd
import os
import sys # For potential error printing during FAISS load

from langchain_core.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

from dotenv import load_dotenv
from flask_cors import CORS

# Langchain community and specific imports for updated versions
from langchain_community.vectorstores import FAISS
# from langchain.chains.combine_documents import create_stuff_documents_chain # Kept for now, will try to replace with LCEL
# from langchain.chains import create_retrieval_chain # Kept for now, will try to replace with LCEL
from langchain.chains import create_stuff_documents_chain, create_retrieval_chain # Explicitly keeping for now


from langchain_google_genai import ChatGoogleGenerativeAI, GoogleGenerativeAIEmbeddings

load_dotenv()

# Initialize LLM and Embeddings - ensure API key is loaded via dotenv
# GOOGLE_API_KEY should be in your .env file
google_api_key = os.environ.get("GOOGLE_API_KEY")
if not google_api_key:
    print("Warning: GOOGLE_API_KEY not found in environment variables. LLM/Embedding calls might fail.", file=sys.stderr)
    # Depending on strictness, could raise an error here
    # raise ValueError("GOOGLE_API_KEY not found in environment variables.")

llm = ChatGoogleGenerativeAI(model="gemini-pro", google_api_key=google_api_key)
# Define embeddings - this would be needed if loading FAISS index that requires it,
# or if rebuilding. Assuming "models/embedding-001" or a similar one was used.
# This is a common default, adjust if a specific model was used for pickling.
embeddings = GoogleGenerativeAIEmbeddings(model="models/embedding-001", google_api_key=google_api_key)


app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

# --- FAISS Index Loading ---
# Attempt to load FAISS indexes at startup.
# This is a critical point. If unpickling fails due to version mismatches,
# these will be None and RAG routes will fail.
# It's generally safer to save/load FAISS using its own methods (save_local, load_local)
# rather than pickling the entire Langchain FAISS object.

def load_faiss_index(path, embedding_function):
    try:
        with open(path, "rb") as f:
            pickled_object = pickle.load(f)

        # Check if the unpickled object is already a FAISS vector store instance from an older version
        # This is a heuristic. A more robust check might be needed.
        if hasattr(pickled_object, "as_retriever") and callable(getattr(pickled_object, "as_retriever")):
             print(f"Successfully unpickled a Langchain FAISS object from {path}")
             # Potentially, we might need to ensure it's compatible with new embedding functions
             # or re-wrap it if its internal structure is too old.
             # For now, assume it might work or its retriever is directly usable.
             return pickled_object
        else:
            # This case is unlikely if it's a Langchain pickle, but added for robustness
            print(f"Warning: {path} did not unpickle to a recognized Langchain FAISS object. Type: {type(pickled_object)}", file=sys.stderr)
            # If it were a raw FAISS index, one might try:
            # from langchain_community.docstore.in_memory import InMemoryDocstore
            # index = pickled_object # Assuming it's a raw faiss.Index
            # docstore = InMemoryDocstore({}) # Need actual docstore and index_to_docstore_id
            # index_to_docstore_id = {} # Need actual mapping
            # return FAISS(embedding_function, index, docstore, index_to_docstore_id)
            return None
    except Exception as e:
        print(f"Error loading FAISS index from {path}: {e}. The RAG functionality relying on this index will fail.", file=sys.stderr)
        print("This might be due to version incompatibility of pickled objects. Consider rebuilding the index with current library versions.", file=sys.stderr)
        return None

db1 = load_faiss_index("my_faiss_index.pkl", embeddings)
db_diet = load_faiss_index("my_faiss_index1.pkl", embeddings)

# --- End FAISS Index Loading ---

@app.route("/",methods=["GET","POST"])
def home():
    return "home"

@app.route("/predict/", methods=["POST"])
def predict():
    logi = pickle.load(open("random_forest_model (1).sav", 'rb'))
    info = request.get_json()
    name = info.get('name')
    data = info.get('data')
    series_data = pd.Series(data, index=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
    df = pd.DataFrame([series_data])
    predictions = logi.predict(df)
    probabilities = logi.predict_proba(df)[:, 1]
    percentage = probabilities * 100
    prediction_result =  percentage[0]

    MONGODB_URI = os.environ.get("DATABASE_URL")
    if not MONGODB_URI:
        print("Error: DATABASE_URL not found in environment variables for /predict route.", file=sys.stderr)
        return jsonify({"error": "Server configuration error"}), 500
    client = MongoClient(MONGODB_URI)
    db = client.test # Consider making 'test' db name also configurable if needed
    collection = db.articles # Consider making 'articles' collection name also configurable
    print(name)
    collection.update_one({"name": name}, {"$set": {"risk":prediction_result }})
    return jsonify(prediction_result)

@app.route("/summary", methods=["GET", "POST"])
def summary():
    info = request.get_json()
    print(info,"world")
    data = info['data']
    name = info.get("name")
    print(name)
    prompt = ChatPromptTemplate.from_template("""generate a medical report based only on the provided context:

        <context>
        {context}
        </context>

        Here is an extended template for a medical report that includes sections for medical data, a summary, conditions found, and explanations of those conditions. Use this template for generation, try to only use the context given as much as possible:

        Rules to be followed:

        1. Each section except Medical Test Results should not contain more than 5 bullet points.
        2. Total report should not exceed 130 lines.
        3. Do not generate * and **.
        4. each point must not have more 20 words(200 whitespaces) and no empty lines between a section and its contents
        5.please refer the context carefully for every section
        6.do not change the sections titles(GENERATED ON,TEST RESULTS,SUMMARY,RISK KEYWORDS) anddo not include any new sections on ur own
        Template:
                                              
        GENERATED ON:{dt}
                                              
        PERSONAL INFORMATION:
        - Age: {d0}
        - Sex: {d1}

        TEST RESULTS: 
        - Chest Pain Type: {d2}
        - Resting Blood Pressure: {d3} mmHg
        - Serum Cholesterol: {d4} mg/dl
        - Fasting Blood Sugar: {d5}
        - Resting ECG Results: {d6}
        - Maximum Heart Rate: {d7}
        - Exercise Induced Angina: {d8}
        - Oldpeak: {d9} mm
        - Slope of Peak Exercise ST Segment: {d10}
        - Number of Major Vessels Colored by Fluoroscopy: {d11}
        - Thallium: {d12}

        SUMMARY:
        - This section will provide a brief overview of the patient's health status based on the medical test results in simple words. a paragragh.

        RISK KEYWORDS:
        - Here, flag the according keywords per data given found in the risk keywords in the context given.just the most important 8 risk keywords do not display similar risk keywords

        DISCLAIMER:" AI-generated report not endorsed by trained professtionals"                                                                          

        {input}
""")

    document_chain = create_stuff_documents_chain(llm, prompt)

    if not db1:
        return jsonify({"error": "Medical report FAISS index not loaded. RAG functionality disabled."}), 500

    retriever = db1.as_retriever()
    retrieval_chain = create_retrieval_chain(retriever, document_chain) # type: ignore
    current_datetime = datetime.now()
    formatted_datetime = current_datetime.strftime("%d-%m-%y %I:%M %p")
    response = retrieval_chain.invoke({'input': "craft the report according",'dt':formatted_datetime,'d1':data[1],'d2':data[2],'d3':data[3],'d4':data[4],'d5':data[5],'d6':data[6],'d7':data[7],'d8':data[8],'d9':data[9],'d11':data[11],'d12':data[12],'d0':data[0],'d10':data[10]})
    preprocessed_text = response["answer"].replace('\n', '<br/>')
    preprocessed_text1=response["answer"].replace('\n',' ')
    start_index = preprocessed_text1.find("RISK KEYWORDS:")
    end_index = preprocessed_text1.find("DISCLAIMER:", start_index + len("RISK KEYWORDS:"))
    content="p"
    content = preprocessed_text1[start_index + len("RISK KEYWORDS:"):end_index].strip()

    MONGODB_URI = os.environ.get("DATABASE_URL")
    if not MONGODB_URI:
        print("Error: DATABASE_URL not found in environment variables for /summary route.", file=sys.stderr)
        # Decide if this should return an error to client or just log
        # For now, it will save if DB is available, otherwise this part fails silently on DB op.
    else:
        try:
            client = MongoClient(MONGODB_URI)
            db = client.test # Consider making 'test' db name also configurable
            collection = db.articles # Consider making 'articles' collection name also configurable
            collection.update_one({"name": name}, {"$set": {"riskfactors":content }})
            print("Riskfactors updated in DB for:", name)
        except Exception as e:
            print(f"Error updating riskfactors in DB for {name}: {e}", file=sys.stderr)

    print(content)
    return jsonify(preprocessed_text,content)
@app.route('/diet',methods = ["POST","GET"])
def diet():
    info =  request.get_json()
    keywords = info['risks']
    peference = info['food']
    height1 = info['height']
    weight1 = info['weight']
    veg = info['veg']
    bmi = weight1/((height1*height1)/100)
    
    bmi = 50/((170*170)/100)
    prompt = ChatPromptTemplate.from_template("""generate personalized diet plan based on the following data based on context:
    <context>
    {context}
    </context>
        Rules to be followed while generating:
        1. Do not generate * and **.
        2.the section:Goals should not exceed limit of 560 characters
        3.the section: meal plans should not exceed limit of  500 characters
        4.the section:Grocery list should not exceed limit of  300 characters
        5. the section:meals and their ingridents should not limit of  exceed 300 characters
        Classification	BMI range - kg/m2
        Severe Thinness	< 16
        Moderate Thinness	16 - 17
        Mild Thinness	17 - 18.5
        Normal	18.5 - 25
        Overweight	25 - 30
        Obese Class I	30 - 35
        Obese Class II	35 - 40
        Obese Class III	> 40
        the diet plan to be generated by considering  the following data given:
        height:{h}
        weight:{w}
        BMI : {m} 
        risk keywords : {risk}(the risks keywords given by the user are  in the context)
        food peference: {type}(refers to region the users want their food from .refer to foos.csv for selection of meals)
        vegetarian: {og}(if yes only use vegetarian meals.refer to foos.csv for selection of meals)
        {input}                                      
 """)
    document_chain = create_stuff_documents_chain(llm, prompt)

    if not db_diet:
        return jsonify({"error": "Diet plan FAISS index not loaded. RAG functionality disabled."}), 500

    retriever = db_diet.as_retriever()
    retrieval_chain = create_retrieval_chain(retriever, document_chain) # type: ignore
    response = retrieval_chain.invoke({'input':"please generated the diet following the diet plan template given in context",'h':170,'w':50,'m':bmi,'risk':keywords,'type':peference,'og':veg})
    print(response["answer"])
    return jsonify(response['answer'])

# Load the prediction model for heart disease
# This model was previously in main1.py
try:
    heart_disease_model = pickle.load(open("finalized_model (1).sav", 'rb'))
except FileNotFoundError:
    print("Error: finalized_model (1).sav not found. Prediction endpoint for heart disease will fail.", file=sys.stderr)
    heart_disease_model = None
except Exception as e:
    print(f"Error loading finalized_model (1).sav: {e}", file=sys.stderr)
    heart_disease_model = None

@app.route("/predict_heart_disease/", methods=["POST"])
def predict_heart_disease():
    if not heart_disease_model:
        return jsonify({"error": "Heart disease prediction model not loaded."}), 500

    try:
        info = request.get_json()
        # Expecting 'data' to be a list of 13 features, similar to how main1.py received it
        data_array = info.get('data')

        if not data_array or not isinstance(data_array, list) or len(data_array) != 13:
            return jsonify({"error": "Invalid input data. Expecting a list of 13 numerical features."}), 400

        # Ensure data is in the correct format (e.g., floats)
        try:
            data_array = [float(x) for x in data_array]
        except ValueError:
            return jsonify({"error": "Invalid input data. All features must be numerical."}), 400

        series_data = pd.Series(data_array, index=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
        df = pd.DataFrame([series_data])

        # logi was the variable name in main1.py for the model
        predictions = heart_disease_model.predict(df)
        probabilities = heart_disease_model.predict_proba(df)[:, 1]
        percentage = probabilities * 100
        prediction_result = percentage[0]

        return jsonify(prediction_result)

    except Exception as e:
        print(f"Error in /predict_heart_disease: {e}", file=sys.stderr)
        return jsonify({"error": "Error processing prediction request."}), 500

if  __name__ == "__main__":
    # Make sure the host is 0.0.0.0 to be accessible from Node.js container/process if they are separate
    app.run(host="0.0.0.0", port=int(os.environ.get("PORT", 8000)),debug=True)
    

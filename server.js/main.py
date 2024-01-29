from flask import Flask, request, jsonify

import pickle
import getpass
import pandas as pd
import os
from langchain.chains.combine_documents import create_stuff_documents_chain
from langchain_core.prompts import ChatPromptTemplate
from dotenv import load_dotenv
from flask_cors import CORS  # Import the CORS module

load_dotenv() 
from langchain_google_genai import ChatGoogleGenerativeAI
llm = ChatGoogleGenerativeAI(model="gemini-pro")
from langchain.chains import create_retrieval_chain

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route("/",methods=["GET","POST"])
def home():
    return "home"

@app.route("/predict", methods=["POST"])
def predict():
    logi = pickle.load(open("random_forest_model (1).sav", 'rb'))
    data = request.get_json()
    data = data['data']
    series_data = pd.Series(data, index=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
    df = pd.DataFrame([series_data])
    predictions = logi.predict(df)
    probabilities = logi.predict_proba(df)[:, 1]
    percentage = probabilities * 100
    prediction_result =  percentage[0]
    return jsonify(prediction_result)

@app.route("/summary", methods=["GET", "POST"])
def summary():
    data = request.get_json()
    data = data['data']
    print(data)
    prompt = ChatPromptTemplate.from_template("""Answer the following question based only on the provided context:

        <context>
        {context}
        </context>

        Here is an extended template for a medical report that includes sections for medical data, a summary, conditions found, and explanations of those conditions. Use this template for generation, try to only use the context given as much as possible:

        Rules to be followed:

        1. Each section except Medical Test Results should not contain more than 5 bullet points.
        2. Total report should not exceed 130 lines.
        3. Do not generate * and **.
        4. each point must not have more 20 words(200 whitespaces)

        Template:

        Personal Information:
        - Age: {d0}
        - Sex: {d1}

        Medical Test parameters:
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

        Summary:
        - This section will provide a brief overview of the patient's health status based on the medical test results. Do not exceed 5 points. Each point should not exceed 13 words.

        Conditions Found:
        - This section will list any specific conditions that were identified based on the test results. Do not exceed 5 points.

        Risk keywords:
        - Here, flag the according keywords per data given found in the risk keywords: in the context.just the most important 5 risk keywords do not display similar risk keywords
        {input}
""")

    document_chain = create_stuff_documents_chain(llm, prompt)
    with open("my_faiss_index.pkl", "rb") as f:
        db1 = pickle.load(f)
    retriever = db1.as_retriever()
    retrieval_chain = create_retrieval_chain(retriever, document_chain)
    response = retrieval_chain.invoke({'input': "craft the report according",'d1':data[1],'d2':data[2],'d3':data[3],'d4':data[4],'d5':data[5],'d6':data[6],'d7':data[7],'d8':data[8],'d9':data[9],'d11':data[11],'d12':data[12],'d0':data[0],'d10':data[10]})
    preprocessed_text = response["answer"].replace('\n', '<br/>')
    return jsonify(preprocessed_text)

if  __name__ == "__main__":
    app.run(port=int(os.environ.get("PORT", 8000)),debug=True)
    

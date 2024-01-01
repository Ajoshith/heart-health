from flask import Flask, request, jsonify
import pandas as pd
import pickle
app = Flask(__name__)
from sklearn.neighbors import KNeighborsClassifier
neigh = pickle.load(open("server.js/finalized_model.sav", 'rb'))
@app.route('/predict', methods=['POST'])
def prediction():
    data = request.json["data"]
    series_data = pd.Series(data, index=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
    df = pd.DataFrame([series_data])
    probabilities = neigh.predict_proba(df)
    percentage = probabilities[:,1]*100
    prediction_result = {"prediction": percentage.tolist()}
    return jsonify(prediction_result)

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=4000, debug=True)

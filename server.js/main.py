from flask import Flask, request, jsonify
import pandas as pd
import pickle
# app = Flask(__name__)
from sklearn.linear_model import LogisticRegression 
logi = pickle.load(open("finalized_model (1).sav", 'rb'))

#dict1={"data":sys.agrv[1]}
#dict1={"data":[57,1,0,130,131,0,1,115,1,1.2,1,1,0]}
# @app.route('/predict', methods=['POST'])
class predict:
  def prediction(array):
    data = array
    series_data = pd.Series(data, index=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
    df = pd.DataFrame([series_data])
    predictions = logi.predict(df)
    probabilities = logi.predict_proba(df)[:, 1]
    percentage = probabilities * 100
    prediction_result = {"prediction": percentage.tolist()}
    return prediction_result

# if __name__ == "__main__":
#     app.run(host="0.0.0.0", port=5000, debug=True)
  


import pickle
import pandas as pd
import numpy as np
from fastapi import FastAPI
   # Load the model from disk   
neigh = pickle.load(open("server.js/finalized_model.sav", 'rb'))
# data = np.array([[63,1,3,145,233,1,0,150,0,2.3,0,0,1]])
# # Assuming the column names are ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
# df = pd.DataFrame(data, columns=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
# pred = neigh.predict(df)
# if pred[0] ==1:
#  print("heart disease present")
# else:
#    print("heart disease absent")
app = FastAPI()
app.post("/predict")
async def prediction(data : list):
  df = pd.DataFrame(data, columns=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
  return neigh.predict(df)
  
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=4000)
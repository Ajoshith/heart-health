from fastapi import FastAPI
import uvicorn
import pandas as pd
import pickle

app = FastAPI()

# Assuming `neigh` is loaded from somewhere
neigh = pickle.load(open("finalized_model.sav", 'rb'))

@app.post("/predict")
async def prediction(data: list):
    df = pd.DataFrame(data, columns=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
    return {"prediction": neigh.predict(df).tolist()}

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=4000, reload=True)

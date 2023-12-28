import pickle
import warnings
import pandas as pd
import numpy as np
warnings.filterwarnings("ignore")
   # Load the model from disk   
neigh = pickle.load(open("finalized_model.sav", 'rb'))
data = np.array([[63,1,3,145,233,1,0,150,0,2.3,0,0,1]])
# Assuming the column names are ['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal']
df = pd.DataFrame(data, columns=['age', 'sex', 'cp', 'trestbps', 'chol', 'fbs', 'restecg', 'thalach', 'exang', 'oldpeak', 'slope', 'ca', 'thal'])
pred = neigh.predict(df)
if pred[0] ==1:
 print("heart disease present")
else:
   print("heart disease absent")
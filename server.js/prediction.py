import main as dp
import sys 
a=sys.argv[1]
a=list(map(float,a.split(',')))
print(dp.predict.prediction(a))

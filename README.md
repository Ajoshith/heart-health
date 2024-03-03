# Heart-Health

**Heart-Health** is an innovative project designed to empower individuals in assessing their heart health. By leveraging machine learning, it predicts heart disease risk based on specific health parameters. Let's explore its features:

## Features

1. **Heart Disease Prediction**:
   - Users input essential health parameters, including blood pressure, cholesterol levels, age, and family history.
   - Our robust machine learning model processes this data and provides a risk assessment.
   - The prediction informs users about their heart disease risk level (e.g., low, moderate, high).

2. **Summary Report**:
   - After prediction, Heart-Health generates a comprehensive summary report.
   - The report includes:
     - Risk level (e.g., low, moderate, high).
     - Key contributing factors (such as elevated blood pressure or high cholesterol).
     - Personalized recommendations (e.g., exercise routines, dietary adjustments).

3. **Personalized Diet Plan**:
   - Based on the risk assessment and individual parameters, Heart-Health suggests a tailored diet plan.
   - The plan may include foods to avoid, recommended nutrients, and portion sizes.

## Installation

To get started with Heart-Health, follow these steps:

1. Clone this repository:
   ```
   git clone https://github.com/Ajoshith/heart-health
   ```

2. Install dependencies (if any):
   ```
   npm install
   pip install -r requirements.txt
   pip install faiss-cpu
   ```

3. Configure environment variables (if applicable).

## Usage

1. Run the frontend server:
   ```
   cd experiment
   npm start
   ```

2. Run the express server:
   ```
   cd server.js
   nodemon server.js
   ```

3.Run the python app:
  ```
  cd server.js
  python main.py
  ```
 The command runs the app in the development mode. Open http://localhost:5000 to view it in your browser. The page will reload when you make changes. You may also see any lint errors in the console.

## .env

Replace with your own google api key:
key available at https://ai.google.dev/?gad_source=1&gclid=CjwKCAiA3JCvBhA8EiwA4kujZvKT5EIFKPMLSSZN0Efn5lJtYson44CfqPb2e-eWcsiANrpk7-qYYBoC5xEQAvD_BwE
```
GOOGLE_API_KEY = "replace with your api key"
```
## Tech Stack

- **Python**: Used for machine learning model development and data processing.
- **Express**: A Node.js framework for building the backend API.
- **MongoDB Atlas**: Cloud-based MongoDB service for storing health data.
- **Python (again)**: Utilized for generating summary reports and diet plans.


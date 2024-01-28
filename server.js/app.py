from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/hello', methods=['POST'])
def hello():
    try:
        # No need to extract and process data, just respond with "Hello"
        return jsonify(message="Hello")
    except Exception as e:
        return jsonify(error=str(e))

if __name__ == '__main__':
    app.run(debug=True, port=8000)

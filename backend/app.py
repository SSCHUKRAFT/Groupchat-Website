from flask import Flask
from flask_restful import Resource, Api
from api.api_test import Api_Test

app = Flask(__name__)  # Creates Flask Instance

api = Api(app)  # api router

api.add_resource(Api_Test, '/')

if __name__ == "__main__":
    print("Starting Flask")
    app.run(debug=True)  # Starts the Flask app

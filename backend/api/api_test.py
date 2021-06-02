from flask_restful import Resource, reqparse, request
import random


class Api_Test(Resource):
    def get(self):
        hello = random.randint(1, 10)
        return (f"Hello World Test {hello}")

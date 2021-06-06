from flask_restful import Resource, reqparse, request
from db.test_db import show_single
import random


class Api_Test(Resource):
    def get(self):
        hello = random.randint(1, 10)
        return (f"Hello World Test {hello}")

class DB_Test(Resource):
    def get(self, username):
        return show_single(username)

from .db_utils import exec_get_one

def show_single(username):
    return exec_get_one('''
        SELECT username FROM public."Test_Test"
            WHERE username = %s;
    ''', (username,))
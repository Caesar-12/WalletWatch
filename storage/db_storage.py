#storage system

import mysql.connector

class DatabaseStorage:
    def __init__(self, host, user, password, database):
        self.db = mysql.connector.connect(
            host=host,
            user=user,
            password=password,
            database=database
        )
        self.cursor = self.db.cursor()

    def create_user(self, user_id, name, email):
        query = "INSERT INTO users (user_id, name, email) VALUES (%s, %s, %s)"
        values = (user_id, name, email)
        self.cursor.execute(query, values)
        self.db.commit()

    def update_user(self, user_id, name=None, email=None):
        query = "UPDATE users SET"
        updates = []
        if name:
            updates.append(f"name = '{name}'")
        if email:
            updates.append(f"email = '{email}'")
        query += ", ".join(updates)
        query += f" WHERE user_id = {user_id}"
        self.cursor.execute(query)
        self.db.commit()

    def delete_user(self, user_id):
        query = f"DELETE FROM users WHERE user_id = {user_id}"
        self.cursor.execute(query)
        self.db.commit()

    def create_expense(self, user_id, expense_id, name, amount):
        query = "INSERT INTO expenses (user_id, expense_id, name, amount) VALUES (%s, %s, %s, %s)"
        values = (user_id, expense_id, name, amount)
        self.cursor.execute(query, values)
        self.db.commit()

    def update_expense(self, expense_id, name=None, amount=None):
        query = "UPDATE expenses SET"
        updates = []
        if name:
            updates.append(f"name = '{name}'")
        if amount:
            updates.append(f"amount = {amount}")
        query += ", ".join(updates)
        query += f" WHERE expense_id = {expense_id}"
        self.cursor.execute(query)
        self.db.commit()

    def delete_expense(self, expense_id):
        query = f"DELETE FROM expenses WHERE expense_id = {expense_id}"
        self.cursor.execute(query)
        self.db.commit()

    def get_user_expenses(self, user_id):
        query = f"SELECT * FROM expenses WHERE user_id = {user_id}"
        self.cursor.execute(query)
        expenses = self.cursor.fetchall()
        return expenses

    def calculate_total_expenses(self, user_id):
        query = f"SELECT SUM(amount) FROM expenses WHERE user_id = {user_id}"
        self.cursor.execute(query)
        total_expenses = self.cursor.fetchone()[0]
        return total_expenses

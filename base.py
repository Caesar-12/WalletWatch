class ExpensesTracker:
    def __init__(self):
        self.users = {}
        self.expenses = {}

    def create_user(self, user_id, name, email):
        if user_id in self.users:
            raise ValueError("User ID already exists")
        self.users[user_id] = {'name': name, 'email': email}

    def update_user(self, user_id, name=None, email=None):
        if user_id not in self.users:
            raise ValueError("User ID does not exist")
        if name:
            self.users[user_id]['name'] = name
        if email:
            self.users[user_id]['email'] = email

    def delete_user(self, user_id):
        if user_id not in self.users:
            raise ValueError("User ID does not exist")
        del self.users[user_id]
        self.expenses = {expense_id: expense for expense_id, expense in self.expenses.items() if expense['user_id'] != user_id}

    def create_expense(self, user_id, expense_id, name, amount):
        if user_id not in self.users:
            raise ValueError("User ID does not exist")
        if expense_id in self.expenses:
            raise ValueError("Expense ID already exists")
        self.expenses[expense_id] = {'user_id': user_id, 'name': name, 'amount': amount}

    def update_expense(self, expense_id, name=None, amount=None):
        if expense_id not in self.expenses:
            raise ValueError("Expense ID does not exist")
        if name:
            self.expenses[expense_id]['name'] = name
        if amount:
            self.expenses[expense_id]['amount'] = amount

    def delete_expense(self, expense_id):
        if expense_id not in self.expenses:
            raise ValueError("Expense ID does not exist")
        del self.expenses[expense_id]

    def get_user_expenses(self, user_id):
        if user_id not in self.users:
            raise ValueError("User ID does not exist")
        user_expenses = [expense for expense in self.expenses.values() if expense['user_id'] == user_id]
        return user_expenses

    def calculate_total_expenses(self, user_id):
        user_expenses = self.get_user_expenses(user_id)
        total_expenses = sum(expense['amount'] for expense in user_expenses)
        return total_expenses
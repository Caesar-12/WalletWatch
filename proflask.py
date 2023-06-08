from flask import Flask, request, session, redirect, url_for, render_template
from flask_mysqldb import MySQL

app = Flask(__name__)

# MySQL configurations
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = 'password'
app.config['MYSQL_DB'] = 'expense_tracker'
app.config['MYSQL_CURSORCLASS'] = 'DictCursor'

mysql = MySQL(app)

# User registration
@app.route('/register', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        # Get form data
        username = request.form['username']
        password = request.form['password']
        email = request.form['email']

        # Check if username already exists
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE username = %s", [username])
        user = cur.fetchone()

        if user:
            error = 'Username already exists'
            return render_template('register.html', error=error)

        # Insert new user into database
        cur.execute("INSERT INTO users (username, password, email) VALUES (%s, %s, %s)", (username, password, email))
        mysql.connection.commit()

        return redirect(url_for('login'))

    return render_template('register.html')

# User login
@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        # Get form data
        username = request.form['username']
        password = request.form['password']

        # Check if username and password are correct
        cur = mysql.connection.cursor()
        cur.execute("SELECT * FROM users WHERE username = %s AND password = %s", [username, password])
        user = cur.fetchone()

        if user:
            session['user_id'] = user['id']
            return redirect(url_for('dashboard'))

        error = 'Invalid username or password'
        return render_template('login.html', error=error)

    return render_template('login.html')

# User dashboard
@app.route('/dashboard')
def dashboard():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    # Get user's expenses
    cur = mysql.connection.cursor()
    cur.execute("SELECT * FROM expenses WHERE user_id = %s", [session['user_id']])
    expenses = cur.fetchall()

    return render_template('dashboard.html', expenses=expenses)

# Add expense
@app.route('/add_expense', methods=['GET', 'POST'])
def add_expense():
    if 'user_id' not in session:
        return redirect(url_for('login'))

    if request.method == 'POST':
        # Get form data
        amount = request.form['amount']
        description = request.form['description']

        # Insert new expense into database
        cur = mysql.connection.cursor()
        cur.execute("INSERT INTO expenses (user_id, amount, description) VALUES (%s, %s, %s)", (session['user_id'], amount, description))
        mysql.connection.commit()

        return redirect(url_for('dashboard'))

    return render_template('add_expense.html')

# Logout
@app.route('/logout')
def logout():
    session.pop('user_id', None)
    return redirect(url_for('login'))

if __name__ == '__main__':
    app.secret_key = 'secret'
    app.run(debug=True)
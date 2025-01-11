from os import path
from flask import render_template, redirect, session, url_for
from flask_login import login_user, logout_user, current_user

from ext import app,db
from forms import RegisterForm, LoginForm
from models import User


@app.route('/')
def index():
    user_role = session.get('role', 'user')
    return render_template("index.html",user_role=user_role)

@app.route('/login',methods=["GET", "POST"])
def login():
    form =LoginForm()
    if form.validate_on_submit():
        username = form.username.data
        password = form.password.data
        user =User.query.filter(User.username == username).first()
        if user and user.password == password:
            login_user(user)

            if username == 'admin':
                session['role'] = 'admin'
            else:
                session['role'] = 'user'
            return redirect('/')
        else:
            return render_template("login.html",form=form, is_incorrect='true')

    return render_template("login.html",form=form, is_incorrect='false')

@app.route('/logout')
def logout():
    logout_user()
    session.clear()
    return redirect ('/')


@app.route('/register', methods=["GET", "POST"])
def register():
    form = RegisterForm()
    user_role = session.get('role', 'user')

    if form.validate_on_submit():
        new_user = User(username=form.username.data, password=form.password.data)
        new_user.save()
        return redirect('/login')

    return render_template("register.html", form=form, user_role=user_role)


@app.route("/quiz",methods=["GET","POST"])
def quiz():
    return render_template("quiz.html")
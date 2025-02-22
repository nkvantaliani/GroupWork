from flask_wtf import FlaskForm
from sqlalchemy import Float
from wtforms.fields import StringField,PasswordField,SubmitField,IntegerField,FloatField
from wtforms.validators import DataRequired, length, equal_to
from flask_wtf.file import FileField



class RegisterForm(FlaskForm):
    username = StringField("Enter your username", validators=[DataRequired()])
    password = PasswordField("Enter password", validators=[DataRequired(),length(min=8,max=20)])
    repeatPassword = PasswordField("Repeat password", validators=[DataRequired(),equal_to("password")])
    submit = SubmitField("Register")

class LoginForm(FlaskForm):
    username = StringField("Enter your username", validators=[DataRequired()])
    password = PasswordField("Enter your password", validators=[DataRequired()])
    login = SubmitField("Login")


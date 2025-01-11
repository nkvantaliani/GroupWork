from flask_login import UserMixin
from ext import db, login_manager

class BaseModel():
    def save(self):
        db.session.add(self)
        db.session.commit()

    def delete(self):
        db.session.delete(self)
        db.session.commit()

    @staticmethod
    def update():
        db.session.commit()


class User(db.Model, BaseModel,UserMixin):
    __tablename__ = "users"

    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(), nullable=False)
    password = db.Column(db.String(), nullable=False)



@login_manager.user_loader
def load_user(user_id):
   return User.query.get(user_id)




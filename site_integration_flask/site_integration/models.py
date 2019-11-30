from site_integration import db


class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    prenom = db.Column(db.String(30), nullable=False)
    nom = db.Column(db.String(30), nullable=False)
    email = db.Column(db.String(100), unique=True, nullable=False)
    classe = db.Column(db.String(), nullable=False)
    tel = db.Column(db.Integer,unique=True, nullable=False)
    image_file = db.Column(db.String(20), nullable=False, default='default.jpg')


    def __repr__(self):
        return f"User('{self.prenom}','{self.nom}', '{self.email}', {self.tel}', {self.image_file}')"

from flask_wtf import FlaskForm
from flask_wtf.file import FileField, FileAllowed
from wtforms import StringField, IntegerField, SubmitField, SelectField
from wtforms.validators import DataRequired, Length, Email, ValidationError
from site_integration.models import User

class InscriptionForm(FlaskForm):
    prenom = StringField('Prénom(s)',
                            validators=[DataRequired(), Length(min=2, max=30)])
    nom = StringField('Nom',
                            validators=[DataRequired(), Length(min=2, max=30)])
    email = StringField('Email',
                            validators=[DataRequired(), Email()])

    classe = SelectField('Classe',validators=[DataRequired()], choices=[('dsti1','DSTI1'),('dsti1','DSTI2'),('dsttr1','DSTTR1'),('dsttr2','DSTTR2')])
    tel = IntegerField('Téléphone', validators=[DataRequired()])
    image_file = FileField('Photo',validators=[FileAllowed(['jpg','png'])])
    submit = SubmitField('Soumettre')



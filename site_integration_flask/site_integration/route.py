from flask import render_template, url_for, flash, redirect, request
from site_integration import app, db
from site_integration.forms import InscriptionForm
from site_integration.models import User
from random import random

@app.route("/", methods=['GET', 'POST'])
def inscription():
    form = InscriptionForm()
    i = str(int(random()*5) + 1)
    bg = r'background/background4.png' if i == '4' else r'background/background'+ i +'.jpg'
    if form.validate_on_submit():
        return redirect(url_for('inscription'))
    return render_template('inscription.html',titlte='Inscription', form=form, bg=bg)


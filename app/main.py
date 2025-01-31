from flask import Flask, render_template
import os

# Read in the API key
API_KEY = os.environ.get("env.API_KEY")

# Create an instance of Flask
app = Flask(__name__)

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
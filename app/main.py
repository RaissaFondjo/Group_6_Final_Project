from flask import Flask, render_template
# import os


# Create an instance of Flask
app = Flask(__name__)


# Read in the API key

# app.config['API_KEY'] = os.environ.get("API_KEY")


from boto.s3.connection import S3Connection
s3 = S3Connection(os.environ['apikey'], os.environ['apikey'])

# Route to render index.html template using data from Mongo
@app.route("/")
def home():

    # Return template and data
    return render_template("index.html")

if __name__ == "__main__":
    app.run(debug=True)
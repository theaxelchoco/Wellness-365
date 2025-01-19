from flask import Flask
from flask_cors import CORS
from routes.journal import journal_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(journal_bp, url_prefix="/api")

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
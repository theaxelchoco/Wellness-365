from flask import Flask
from routes.journal import journal_bp

app = Flask(__name__)

app.register_blueprint(journal_bp, url_prefix="/api")

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
from flask import Flask
from flask_cors import CORS
from routes.journal import journal_bp
from routes.task import task_bp

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})

app.register_blueprint(journal_bp, url_prefix="/api")
app.register_blueprint(task_bp, url_prefix="/api")

@app.route("/api/python")
def hello_world():
    return "<p>Hello, World!</p>"

if __name__ == "__main__":
    app.run(debug=True, port=5000)
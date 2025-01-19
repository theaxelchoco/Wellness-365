from flask import Blueprint, jsonify
from pymongo import MongoClient

task_bp = Blueprint("task", __name__)

# MongoDB connection (replace with your actual connection string and database)
client = MongoClient("mongodb+srv://rex_infernum:xfpH8UvICv1s9pgz@cluster-genai.wbw4x.mongodb.net/",
                    tls=True,
                    tlsAllowInvalidCertificates=True)
db = client["Wellness365_DB"]
task_collection = db["task"]

@task_bp.route("/task", methods=["GET"])
def get_tasks():
    try:
        tasks = list(
            task_collection.find({}, {"_id": 0}).sort("dateCreated", 1)
        )
        return jsonify({"success": True, "tasks": tasks}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
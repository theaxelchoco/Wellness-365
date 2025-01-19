from flask import Blueprint, jsonify
from pymongo import MongoClient

journal_bp = Blueprint("journal", __name__)

# MongoDB connection (replace with your actual connection string and database)
client = MongoClient("mongodb+srv://rex_infernum:xfpH8UvICv1s9pgz@cluster-genai.wbw4x.mongodb.net/",
                    tls=True,
                    tlsAllowInvalidCertificates=True)
db = client["Wellness365_DB"]
journal_collection = db["journal"]

@journal_bp.route("/journal", methods=["GET"])
def get_journal_entries():
    try:
        entries = list(journal_collection.find({}, {"_id": 0}))  # Exclude _id
        return jsonify({"success": True, "entries": entries}), 200
    except Exception as e:
        return jsonify({"success": False, "error": str(e)}), 500
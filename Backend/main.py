from flask import Flask, jsonify, request
from flask_cors import CORS  # Import Flask-CORS
import os
from dotenv import load_dotenv
from supabase import create_client

# Load environment variables
load_dotenv()

# Initialize Flask app
app = Flask(__name__)

# Enable CORS for all API routes
CORS(app, resources={r"/*": {"origins": "*"}})

# Initialize Supabase client
url = os.getenv("SUPABASE_URL")
key = os.getenv("SUPABASE_KEY")

if not url or not key:
    raise ValueError("Supabase URL and Key are required. Check your .env file.")

supabase = create_client(url, key)

# API endpoint to fetch all protein powders from the database
@app.route('/api/protein-powders', methods=['GET'])
def get_protein_powders():
    try:
        response = supabase.table("Protein-Powder-Info").select("*").execute()
        # For debugging - print what we're receiving from Supabase
        print(f"Data from Supabase: {response.data}")
        
        # Make sure the response is a proper list
        if not isinstance(response.data, list):
            return jsonify({"error": "Expected list from database"}), 500
            
        # Ensure all data is JSON serializable
        clean_data = []
        for item in response.data:
            clean_item = {}
            for key, value in item.items():
                # Convert any non-serializable values to strings
                if isinstance(value, (int, float, str, bool)) or value is None:
                    clean_item[key] = value
                else:
                    clean_item[key] = str(value)
            clean_data.append(clean_item)
            
        return jsonify(clean_data), 200
    except Exception as e:
        print(f"Error in API route: {str(e)}")
        return jsonify({"error": str(e)}), 500

# API endpoint to fetch sorted protein powders
@app.route('/api/protein-powders/sorted', methods=['GET'])
def get_sorted_protein_powders():
    try:
        response = supabase.table("Protein-Powder-Info").select("*").execute()
        data = response.data

        if not data:
            return jsonify({"message": "No data found"}), 404

        protein_per_serving = {row["name"]: row["properserv"] for row in data}

        sorted_protein = sorted(protein_per_serving.items(), key=lambda item: item[1], reverse=True)

        sorted_data = [item for name, _ in sorted_protein for item in data if item["name"] == name]

        return jsonify(sorted_data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

# Handle CORS preflight requests
def after_request(response):
    response.headers["Access-Control-Allow-Origin"] = "*"
    response.headers["Access-Control-Allow-Headers"] = "Content-Type, Authorization"
    response.headers["Access-Control-Allow-Methods"] = "GET, POST, PUT, DELETE, OPTIONS"
    
    if request.method == "OPTIONS":
        response.status_code = 200
        response.headers["Content-Length"] = "0"

    return response

if __name__ == '__main__':
    print("Starting Flask Server on port 5000...")
    app.run(debug=True, port=5000)
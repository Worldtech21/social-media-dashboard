from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests

# Sample social media analytics data (simulate what you might get from an API)
sample_data = {
    "followers": 1500,
    "likes": [120, 150, 180, 200, 220],
    "engagement": [2.5, 3.0, 3.5, 3.2, 4.0],
    "dates": ["2024-09-01", "2024-09-02", "2024-09-03", "2024-09-04", "2024-09-05"]
}

@app.route('/api/analytics', methods=['GET'])
def get_analytics():
    return jsonify(sample_data)

if __name__ == '__main__':
    app.run(debug=True, port=5000)

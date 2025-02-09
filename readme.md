How It Works:

The backend (in backend/app.py) is a Flask application that returns a JSON object with sample analytics data when a GET request is made to /api/analytics.
The frontend (in frontend/) is a React app that, upon mounting, fetches the analytics data from the backend and passes it to the AnalyticsChart component. This component then renders a bar chart (using Chart.js via react-chartjs-2) displaying metrics such as likes and engagement over a series of dates.
Testing Locally Later:
After downloading the ZIP file:

Backend:
Open a terminal, navigate to the backend/ folder, run pip install -r requirements.txt, and then python app.py (Flask will run on http://localhost:5000).
Frontend:
Open another terminal, navigate to the frontend/ folder, run npm install, and then npm start (React app will run on http://localhost:3000).
Commit Messages:
Use the suggested commit messages as you add each file using the GitHub UI.


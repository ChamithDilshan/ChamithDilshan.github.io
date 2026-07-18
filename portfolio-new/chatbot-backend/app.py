from flask import Flask, request, jsonify
from flask_cors import CORS
import google.generativeai as genai
import os
from pathlib import Path

# ============================================================
# Configuration
# ============================================================
GEMINI_API_KEY = os.environ.get("GEMINI_API_KEY", "YOUR_GEMINI_API_KEY_HERE")
KNOWLEDGE_FILE = Path(__file__).parent / "knowledge.md"

# ============================================================
# Initialize
# ============================================================
app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from your portfolio

# Configure Gemini
genai.configure(api_key=GEMINI_API_KEY)

# Load knowledge document
knowledge_text = KNOWLEDGE_FILE.read_text(encoding="utf-8")

# System prompt that grounds the AI
SYSTEM_PROMPT = f"""You are Chamith Ranathunga's AI assistant on his portfolio website. 
You answer questions about Chamith based ONLY on the information provided below.

RULES:
1. Be friendly, professional, and concise.
2. Only answer questions related to Chamith Ranathunga — his work, projects, skills, education, and experience.
3. If someone asks something NOT related to Chamith or not in the knowledge base, politely say: "I can only answer questions about Chamith Ranathunga and his work. Feel free to ask me about his projects, skills, or experience!"
4. Never make up information. If you don't know, say so.
5. Keep responses short (2-4 sentences) unless the user asks for detail.
6. Use a warm, approachable tone with occasional emojis.
7. When mentioning projects, you can suggest the user check out the Projects page for more details.

CHAMITH'S INFORMATION:
{knowledge_text}
"""

# Store conversation sessions in memory
# For PythonAnywhere free tier, this resets on restart — that's fine
sessions = {}

# Initialize Gemini model
model = genai.GenerativeModel(
    model_name="gemini-2.0-flash",
    system_instruction=SYSTEM_PROMPT,
)


def get_or_create_chat(session_id):
    """Get existing chat session or create a new one."""
    if session_id not in sessions:
        sessions[session_id] = model.start_chat(history=[])
        # Limit stored sessions to prevent memory issues
        if len(sessions) > 100:
            oldest_key = next(iter(sessions))
            del sessions[oldest_key]
    return sessions[session_id]


# ============================================================
# Routes
# ============================================================
@app.route("/ask", methods=["POST"])
def ask():
    """Handle chat messages."""
    try:
        data = request.get_json()
        question = data.get("question", "").strip()
        session_id = data.get("sessionID", "default")

        if not question:
            return jsonify({"error": "Please provide a question."}), 400

        # Get or create chat session (maintains conversation history)
        chat = get_or_create_chat(session_id)

        # Send message and get response
        response = chat.send_message(question)

        return jsonify({"response": response.text})

    except Exception as e:
        print(f"Error: {e}")
        return jsonify({"error": "Sorry, something went wrong. Please try again!"}), 500


@app.route("/health", methods=["GET"])
def health():
    """Health check endpoint."""
    return jsonify({"status": "ok", "message": "Chamith's AI assistant is running! 🚀"})


# ============================================================
# Run
# ============================================================
if __name__ == "__main__":
    app.run(debug=True, port=5000)

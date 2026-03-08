# PythonAnywhere Deployment Guide

## 1. Get a Free Gemini API Key

1. Go to [Google AI Studio](https://aistudio.google.com/apikey)
2. Sign in with your Google account
3. Click **"Create API Key"**
4. Copy the key — you'll need it in step 3

## 2. Upload Files to PythonAnywhere

Upload these 3 files to your PythonAnywhere home directory (`/home/chamithdilshan/`):

- `app.py`
- `knowledge.md`
- `requirements.txt`

## 3. Set Up the Environment

Open a **Bash console** on PythonAnywhere and run:

```bash
cd /home/chamithdilshan
pip3 install --user -r requirements.txt
```

Then set your API key as an environment variable. Go to:
- **Web** tab → **WSGI configuration file** → Add this line at the top:

```python
import os
os.environ["GEMINI_API_KEY"] = "YOUR_ACTUAL_API_KEY_HERE"
```

## 4. Configure the Web App

1. Go to the **Web** tab
2. If you already have a web app (`chamith.pythonanywhere.com`), edit it. Otherwise create one:
   - **Add a new web app** → **Manual configuration** → **Python 3.10**
3. Set **Source code** to: `/home/chamithdilshan`
4. Edit the **WSGI configuration file** and replace the content with:

```python
import sys
import os

# Add your project directory
path = '/home/chamithdilshan'
if path not in sys.path:
    sys.path.append(path)

# Set the Gemini API key
os.environ["GEMINI_API_KEY"] = "YOUR_ACTUAL_API_KEY_HERE"

# Import your Flask app
from app import app as application
```

5. Click **Reload** on the Web tab

## 5. Test It

Visit: `https://chamith.pythonanywhere.com/health`

You should see: `{"message": "Chamith's AI assistant is running! 🚀", "status": "ok"}`

Then test the chat on your portfolio site!

# 🚀 BhagvadGPT Setup Guide

This guide will help you set up BhagvadGPT on your local machine.

## Prerequisites

- Python 3.10 or higher
- Node.js 20 or higher
- Docker and Docker Compose (recommended)
- Git

## Step-by-Step Setup

### 1. Clone and Navigate

```bash
git clone https://github.com/himanshupdev123/BhagavadGPT.git
cd BhagavadGPT
```

### 2. Backend Setup

#### Install Python Dependencies

```bash
cd bhagvadgpt-backend

# Create virtual environment
python -m venv venv

# Activate it
# Windows:
venv\Scripts\activate
# Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt
```

#### Configure Environment

```bash
# Copy the example file
cp .env.example .env

# Edit .env with your favorite editor
# Add your Groq API key
```

**Get Groq API Key:**
1. Visit https://console.groq.com/keys
2. Sign up/Login
3. Create new API key
4. Paste it in `.env` file

#### Build Vector Database

```bash
python build_db.py
```

This will:
- Read all 700+ verses from `all_verses.json`
- Create embeddings using sentence-transformers
- Store in ChromaDB vector database
- Takes ~2-3 minutes

#### Start Backend Server

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

Keep this terminal open. Backend runs at `http://localhost:8000`

### 3. Frontend Setup

Open a **new terminal**:

```bash
cd BhagavadGPT/BhagvadGPT-frontend

# Copy environment file
cp .env.example .env
```

#### Configure Google OAuth

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project (or select existing)
3. Enable "Google+ API"
4. Go to **Credentials** → **Create Credentials** → **OAuth 2.0 Client ID**
5. Application type: **Web application**
6. Add Authorized redirect URI:
   ```
   http://localhost:3080/oauth/google/callback
   ```
7. Copy **Client ID** and **Client Secret**
8. Paste them in `.env`:
   ```
   GOOGLE_CLIENT_ID=your_client_id_here
   GOOGLE_CLIENT_SECRET=your_client_secret_here
   ```

#### Generate Security Keys

Visit https://www.librechat.ai/toolkit/creds_generator

Copy the generated values to your `.env` file:
- `JWT_SECRET`
- `JWT_REFRESH_SECRET`
- `CREDS_KEY`
- `CREDS_IV`

#### Start Frontend with Docker

```bash
docker-compose up -d
```

This will start:
- MongoDB (database)
- Meilisearch (search engine)
- LibreChat API
- LibreChat Frontend

Wait ~30 seconds for all services to start.

### 4. Access the Application

Open your browser and go to:
```
http://localhost:3080
```

You should see the BhagvadGPT interface with:
- Saffron background
- "Radhe Radhe" greeting
- Google Sign-In button

## 🎯 Quick Test

1. Click "Sign in with Google"
2. Authorize the application
3. You'll be redirected to the chat interface
4. Try asking: "How to handle fear of failure?"
5. You should get a response with relevant Gita verses!

## 🐛 Troubleshooting

### Backend Issues

**Error: "No module named 'fastapi'"**
```bash
# Make sure virtual environment is activated
source venv/bin/activate  # or venv\Scripts\activate
pip install -r requirements.txt
```

**Error: "GROQ_API_KEY not found"**
- Check that `.env` file exists in `bhagvadgpt-backend/`
- Verify the API key is correct
- No quotes needed around the key

**Error: "Collection not found"**
```bash
# Rebuild the database
python build_db.py
```

### Frontend Issues

**Error: "Connection error"**
- Make sure backend is running on port 8000
- Check `BHAGVADGPT_BASE_URL` in `.env`
- For Docker: use `http://host.docker.internal:8000`
- For local: use `http://localhost:8000`

**Error: "Google OAuth failed"**
- Verify redirect URI in Google Console matches exactly
- Check Client ID and Secret in `.env`
- Make sure Google+ API is enabled

**Docker containers won't start**
```bash
# Check if ports are already in use
docker-compose down
docker-compose up -d

# View logs
docker-compose logs -f
```

### Database Issues

**MongoDB connection failed**
```bash
# Check if MongoDB is running
docker-compose ps

# Restart MongoDB
docker-compose restart mongodb
```

## 🔄 Updating

To update to the latest version:

```bash
git pull origin main

# Update backend
cd bhagvadgpt-backend
pip install -r requirements.txt

# Update frontend
cd ../BhagvadGPT-frontend
docker-compose pull
docker-compose up -d
```

## 🛑 Stopping the Application

```bash
# Stop backend (Ctrl+C in the terminal)

# Stop frontend
cd BhagvadGPT-frontend
docker-compose down
```

## 📚 Next Steps

- Read the [README.md](README.md) for more details
- Check [API Documentation](http://localhost:8000/docs) when backend is running
- Customize the interface in `librechat.yaml`
- Deploy to production (see README for deployment options)

## 💡 Tips

- Keep backend terminal open while using the app
- Use Docker Desktop to monitor containers
- Check logs if something doesn't work: `docker-compose logs -f`
- Backend API docs available at: http://localhost:8000/docs

## 🆘 Still Having Issues?

Open an issue on GitHub:
https://github.com/himanshupdev123/BhagavadGPT/issues

Include:
- Your OS (Windows/Mac/Linux)
- Python version (`python --version`)
- Node version (`node --version`)
- Error messages
- Steps you've tried

---

**Radhe Radhe! 🙏**

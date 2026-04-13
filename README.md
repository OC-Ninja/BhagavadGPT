#  BhagvadGPT 

BhagvadGPT is an AI-powered spiritual companion that provides wisdom and guidance based on the teachings of the Bhagavad Gita. Built with modern RAG (Retrieval-Augmented Generation) technology, it retrieves relevant verses from the sacred text and provides personalized spiritual guidance.

![BhagvadGPT Interface](https://img.shields.io/badge/Status-Active-success)
![License](https://img.shields.io/badge/License-MIT-blue)
![Python](https://img.shields.io/badge/Python-3.10+-blue)
![Node](https://img.shields.io/badge/Node-20+-green)

##  Features

- **RAG-Powered Responses**: Retrieves relevant verses from the Bhagavad Gita using ChromaDB vector database
-  **AI-Driven Guidance**: Uses Groq's Llama 3.3 70B model for intelligent, contextual responses
-  **Custom UI**: Beautiful saffron-themed interface with "Radhe Radhe" greeting
-  **Google OAuth**: Secure authentication with Google Sign-In
-  **Modern Chat Interface**: Built on LibreChat for a seamless user experience
- **Docker Support**: Easy deployment with Docker Compose
-  **Complete Gita Database**: All 700+ verses with Sanskrit, translations, and meanings

##  Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    BhagvadGPT Frontend                      │
│              (LibreChat - React + TypeScript)               │
│                                                             │
│  • Custom Branding & Styling                               │
│  • Google OAuth Integration                                │
│  • Chat Interface                                          │
└──────────────────────┬──────────────────────────────────────┘
                       │
                       │ HTTP/REST API
                       │
┌──────────────────────▼──────────────────────────────────────┐
│                 BhagvadGPT Backend                          │
│                  (FastAPI + Python)                         │
│                                                             │
│  ┌─────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  ChromaDB   │───▶│  RAG Engine  │───▶│  Groq LLM    │  │
│  │  (Vectors)  │    │              │    │  (Llama 3.3) │  │
│  └─────────────┘    └──────────────┘    └──────────────┘  │
└─────────────────────────────────────────────────────────────┘
```

##  Quick Start

### Prerequisites

- **Docker & Docker Compose** (recommended)
- OR:
  - Python 3.10+
  - Node.js 20+
  - MongoDB

### 1. Clone the Repository

```bash
git clone https://github.com/himanshupdev123/BhagavadGPT.git
cd BhagavadGPT
```

### 2. Set Up Backend

```bash
cd bhagvadgpt-backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy environment file
cp .env.example .env

# Edit .env and add your Groq API key
# Get it from: https://console.groq.com/keys
```

**Build the vector database:**

```bash
python build_db.py
```

This will create the ChromaDB vector database with all Bhagavad Gita verses.

**Start the backend server:**

```bash
uvicorn main:app --host 0.0.0.0 --port 8000
```

Backend will be running at `http://localhost:8000`

### 3. Set Up Frontend

```bash
cd ../BhagvadGPT-frontend

# Copy environment file
cp .env.example .env

# Edit .env and configure:
# - Google OAuth credentials (from Google Cloud Console)
# - Generate JWT secrets (use: https://www.librechat.ai/toolkit/creds_generator)
# - Other configuration as needed
```

### 4. Run with Docker (Recommended)

```bash
# Make sure backend is running separately (see step 2)

# Start frontend services
docker-compose up -d
```

The application will be available at `http://localhost:3080`

##  Getting API Keys

### Groq API Key (Required)

1. Go to [Groq Console](https://console.groq.com/keys)
2. Sign up or log in
3. Create a new API key
4. Add it to `bhagvadgpt-backend/.env`

### Google OAuth (Required for Login)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Add authorized redirect URI: `http://localhost:3080/oauth/google/callback`
6. Copy Client ID and Client Secret to `BhagvadGPT-frontend/.env`

##  Project Structure

```
BhagavadGPT/
├── bhagvadgpt-backend/          # FastAPI backend
│   ├── main.py                  # API endpoints
│   ├── build_db.py              # Vector DB builder
│   ├── all_verses.json          # Gita verses data
│   ├── requirements.txt         # Python dependencies
│   └── gita_knowledge_base/     # ChromaDB storage (generated)
│
├── BhagvadGPT-frontend/         # LibreChat frontend
│   ├── client/                  # React frontend
│   ├── api/                     # Backend API
│   ├── packages/                # Shared packages
│   ├── librechat.yaml           # BhagvadGPT configuration
│   ├── docker-compose.yml       # Docker setup
│   └── .env                     # Environment variables
│
└── README.md
```

##  Customization

The interface is customized with:
- **Saffron theme** (#FFF4E6 background, #FF9933 accents)
- **"Radhe Radhe" greeting** instead of time-based greetings
- **BhagvadGPT branding** throughout the interface
- **Locked to BhagvadGPT model** - users can't switch models

Configuration is in `BhagvadGPT-frontend/librechat.yaml`

##  Docker Deployment

### Development

```bash
docker-compose up
```

### Production

```bash
docker-compose -f docker-compose.yml up -d
```

##  Deployment Options

### Recommended Platforms:

1. **Railway.app** - Easiest, one-click deploy
2. **Render.com** - Free tier available
3. **DigitalOcean** - Reliable, good pricing
4. **AWS/GCP/Azure** - For production scale

See [DEPLOYMENT.md](DEPLOYMENT.md) for detailed deployment guides.

## 🛠️ Development

### Backend Development

```bash
cd bhagvadgpt-backend
source venv/bin/activate  # or venv\Scripts\activate on Windows
uvicorn main:app --reload --host 0.0.0.0 --port 8000
```

### Frontend Development

```bash
cd BhagvadGPT-frontend
npm install
npm run frontend:dev
```

##  API Documentation

Once the backend is running, visit:
- Swagger UI: `http://localhost:8000/docs`
- ReDoc: `http://localhost:8000/redoc`

### Main Endpoint

**POST** `/v1/chat/completions`

```json
{
  "messages": [
    {
      "role": "user",
      "content": "How to handle fear of failure?"
    }
  ],
  "model": "bhagvadgpt",
  "stream": false
}
```

##  Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

##  Acknowledgments

- **Bhagavad Gita** - The sacred text that powers this application
- **LibreChat** - For the amazing chat interface framework
- **Groq** - For providing fast LLM inference
- **ChromaDB** - For vector database capabilities
- **LangChain** - For RAG implementation tools

## 📧 Contact

Himanshu P Dev - [@himanshupdev123](https://github.com/himanshupdev123)

Project Link: [https://github.com/himanshupdev123/BhagavadGPT](https://github.com/himanshupdev123)

---

**Radhe Radhe! 🙏**


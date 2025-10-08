from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS settings for frontend connection
origins = [
    "http://localhost:19006",      # Expo web on PC
    "http://127.0.0.1:19006",      # alternative localhost
    "http://192.168.1.5:19006",    # PC local IP for phone (replace with your actual IP)
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root path
@app.get("/")
def root():
    return {"message": "Backend is running!"}

# Test endpoint
@app.get("/ping")
def ping():
    return {"message": "pong"}

# Example: another endpoint
@app.get("/hello")
def hello():
    return {"message": "Hello from backend!"}

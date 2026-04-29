from fastapi import FastAPI

import time
import os

import psycopg2
from psycopg2.extras import RealDictCursor

from .utils.database import engine
from .utils import models

from .routers import books

from dotenv import load_dotenv
import os

from fastapi.middleware.cors import CORSMiddleware

load_dotenv()

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

# declare origin/s
origins = [
    "http://localhost:5173",
    "localhost:5173"
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(books.router)

#database connection
while True:
    try:
        conn = psycopg2.connect(
            host="localhost",
            database="internet_library",
            user="postgres",
            password="postgres",
            cursor_factory=RealDictCursor
        )
        cursor = conn.cursor()
        print("Database connection was successful")
        break
    except Exception as error: 
        print("Database connection failed")
        print("Error: ", error)
        time.sleep(2)

@app.get("/")
async def root():
    return {"message": "Hello World"}


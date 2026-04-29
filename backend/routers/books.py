from fastapi import APIRouter, status, Depends
from ..utils import models
from ..utils import schemas
from ..utils.database import get_db 
from sqlalchemy.orm import Session
import requests
import os
from dotenv import load_dotenv

load_dotenv()

router = APIRouter(
  prefix="/books",
  tags=["books"]
)

total_books_traded = 0
API_URL = os.getenv("HARDCOVER_API_URL")
API_KEY = os.getenv("HARDCOVER_API_KEY")

@router.get("/")
async def get_books(db: Session = Depends(get_db), status_code=status.HTTP_200_OK):
    try: 
        books = db.query(models.Books).all()
        return {"books": books}
    except Exception as e:
        return {"error": str(e)}

@router.get("/total")
async def get_total_books_traded():
    return {"total_books_traded": total_books_traded}

@router.get("/{book_id}")
async def get_book(book_id: int, db: Session = Depends(get_db), status_code=status.HTTP_200_OK):
    try:
        book = db.query(models.Books).filter(models.Books.id == book_id).first()
        if book:
            return {"book": book}
        else:
            return {"error": "Book not found"}
    except Exception as e:
        return {"error": str(e)}

@router.put("/{book_id}")
async def trade_book(book_id: int, book: schemas.BookDetails, db: Session = Depends(get_db), status_code=status.HTTP_201_CREATED):
    try:
        db_book = db.query(models.Books).filter(models.Books.id == book_id).first()

        if db_book:
            new_book = await get_book_details(book.title, book.author)
            db_book.title = new_book["title"]
            db_book.author = new_book["author"]
            db_book.summary = new_book["summary"]
            db_book.notes = new_book["notes"]
            db_book.image = new_book["image"]
            db.commit()
            db.refresh(db_book)

            return {"book": db_book}
        else:
            return {"error": "Book not found"}
    except Exception as e:
        return {"error": str(e)}

@router.delete("/{book_id}")
async def delete_book(book_id: int, db: Session = Depends(get_db), status_code=status.HTTP_204_NO_CONTENT):
    try:
        book = db.query(models.Books).filter(models.Book.id == book_id).first()
        if book:
            db.delete(book)
            db.commit()
            return {"message": f"Deleted book {book_id}"}
        else:
            return {"error": "Book not found"}
    except Exception as e:
        return {"error": str(e)}

@router.post("/")
async def create_book(book: schemas.BookDetails, db: Session = Depends(get_db), status_code=status.HTTP_201_CREATED):
    try:
        get_book = await get_book_details(book.title, book.author)

        new_book = models.Books(**get_book)

        db.add(new_book)
        db.commit()
        db.refresh(new_book)
        return {"New book": new_book}
    except Exception as e:
        return {"error": str(e)}
    
async def get_book_details(book_title: str, book_author: str):
    try:
        #use hardcover API to get book summary, cover image with provided title/author from user
        print(f"{book_title} by {book_author} is being fetched!")

        query = """
        query BooksByUserCount {
          books(
            where: {contributions: {author: {name: {_eq: "%s"}}, _and: {book: {title: {_eq: "%s"}}}}}
            limit: 1
            order_by: {id: asc}
          ) {
            id
            title
            contributions {
              author {
                name
              }
            }
            image {
              url
            }
            description
          }
        }
        """ % (book_author, book_title)

        headers = {
            "Authorization": API_KEY,
            "Content-Type": "application/json"
        }

        response = requests.post(
            API_URL,
            json={"query": query},
            headers=headers
        )
        
        data = response.json()
        
        if "errors" in data:
            print(f"GraphQL error: {data['errors']}")
            return None
        
        book = data["data"]["books"][0] if data["data"]["books"] else None

        return {"title": book["title"],
            "author": book_author,
            "summary": book.get("description", ""),
            "notes": "",
            "image": book["image"]["url"] if book["image"] else ""}
    except Exception as e:
        print("Error occurred while fetching book details:", e)
        return None

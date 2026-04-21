from fastapi import APIRouter, status, Depends
from ..utils import models
from ..utils import schemas
from ..utils.database import get_db 
from sqlalchemy.orm import Session

router = APIRouter(
  prefix="/books",
  tags=["books"]
)

total_books_traded = 0

@router.get("/")
async def get_books(db: Session = Depends(get_db), status_code=status.HTTP_200_OK):
    try: 
        books = db.query(models.Book).all()
        return {"books": books}
    except Exception as e:
        return {"error": str(e)}

@router.get("/total")
async def get_total_books_traded():
    return {"total_books_traded": total_books_traded}

@router.get("/{book_id}")
async def get_book(book_id: int, db: Session = Depends(get_db), status_code=status.HTTP_200_OK):
    try:
        book = db.query(models.Book).filter(models.Book.id == book_id).first()
        if book:
            return {"book": book}
        else:
            return {"error": "Book not found"}
    except Exception as e:
        return {"error": str(e)}

@router.put("/{book_id}")
async def trade_book(book_id: int, book: schemas.BookDetails, db: Session = Depends(get_db), status_code=status.HTTP_201_CREATED):
    try:
        db_book = db.query(models.Book).filter(models.Book.id == book_id).first()
        if db_book:
            new_book = get_book_details(book.title, book.author)
            db_book.title = new_book.title
            db_book.author = new_book.author
            db_book.summary = new_book.summary
            db_book.notes = new_book.notes
            db_book.image = new_book.image
            db.commit()
            db.refresh(db_book)

            total_books_traded += 1
            return {"book": db_book}
        else:
            return {"error": "Book not found"}
    except Exception as e:
        return {"error": str(e)}

@router.delete("/{book_id}")
async def delete_book(book_id: int, db: Session = Depends(get_db), status_code=status.HTTP_204_NO_CONTENT):
    try:
        book = db.query(models.Book).filter(models.Book.id == book_id).first()
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
        #new_book = models.Books(**book.dict())
        new_book = get_book_details(book.title, book.author)
        db.add(new_book)
        db.commit()
        db.refresh(new_book)
        return {"New book": new_book}
    except Exception as e:
        return {"error": str(e)}
    
async def get_book_details(book_title: str, book_author: str):
    try:
        #use hardcover API to get book summary, cover image with provided title/author from user
        print(f"{book_title} by {book_author} traded successfully!")
    except Exception as e:
        print("Error occurred while fetching book details:", e)
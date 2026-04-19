from fastapi import APIRouter, status

router = APIRouter(
  prefix="/books",
  tags=["books"]
)

@router.get("/")
async def get_books(status_code=status.HTTP_200_OK):
    return {"message": "List of 15 books with id and image"}

@router.get("/{book_id}")
async def get_book(book_id: int, status_code=status.HTTP_200_OK):
    return {"message": f"Details of book {book_id}"}

@router.put("/{book_id}")
async def update_book(book_id: int, status_code=status.HTTP_201_CREATED):
    return {"message": f"Updated details of book {book_id}"}

@router.delete("/{book_id}")
async def delete_book(book_id: int, status_code=status.HTTP_204_NO_CONTENT):
    return {"message": f"Deleted book {book_id}"}

@router.post("/")
async def create_book(status_code=status.HTTP_201_CREATED):
    return {"message": "Created new book"}
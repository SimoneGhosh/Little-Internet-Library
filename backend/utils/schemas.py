from pydantic import BaseModel

class Books(BaseModel):
    id: int
    image: str

class BookDetails(BaseModel):
    id: int
    title: str
    author: str
    summary: str
    notes: str
    image: str
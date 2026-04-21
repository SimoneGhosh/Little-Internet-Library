from pydantic import BaseModel

class BookDetails(BaseModel):
    title: str
    author: str
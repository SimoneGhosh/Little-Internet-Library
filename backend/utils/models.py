from sqlalchemy import TIMESTAMP, Column, Integer, String, Boolean, Numeric, ForeignKey
from sqlalchemy.sql.expression import text
from sqlalchemy.sql.sqltypes import TIMESTAMP
from .database import Base

#SQL Alchemy models

class Books(Base):
    created_at = Column(TIMESTAMP(timezone=True), nullable=False, server_default=text("now()"))

    __tablename__ = "books"
    id = Column(Integer, primary_key=True, nullable=False)
    title = Column(String, nullable=False)
    author = Column(String, nullable=False)
    summary = Column(String, nullable=False)
    notes = Column(String, nullable=True)
    image = Column(String, nullable=False)
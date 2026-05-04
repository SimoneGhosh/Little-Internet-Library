# Little-Internet-Library

Share book recommendations with others!

How is book data processed?
- User provides book title and author. With Hardcover API, a graphQL query is called to retrieve book cover image and summary.
- Book data is stored in postgreSQL. When a book swap is made a PUT method is called to update data for that book ID.

How is other cursor seen?
- With fastAPI WebSocket!
- In progress!
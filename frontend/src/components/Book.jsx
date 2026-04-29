import { Outlet } from 'react-router-dom';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from "axios";
import './Book.css'


const Book = () => {
    const { bookId } = useParams();
    const navigate = useNavigate();
    const [book, setBook] = useState([]);

    useEffect(() => {
    // Function to fetch books
    const fetchBook = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/books/${bookId}`);
            setBook(response.data.book); // Update the book state with fetched data
            console.log(book);
        } catch (error) {
            console.error("There was an error fetching the books:", error);
        }
    };

    fetchBook();
    }, [bookId]);

    return (
        <main className="Book">
            {console.log(bookId)}
            <div className="book-details">
                <h1>{book?.title}</h1>
                <h2>Author</h2>
                <p>{book?.author}</p>
                <h2>Summary</h2>
                <p>{book?.summary}</p>
            <h2>Notes</h2>
            <p>{book?.notes}</p>
            <button onClick={() => navigate(`/swap/${book.id}`)}>
                Swap
            </button>
            </div>

            <div className="book-image">
                <img src={book?.image} alt={book?.title} />
            </div>
        </main>
    )
}

export default Book;
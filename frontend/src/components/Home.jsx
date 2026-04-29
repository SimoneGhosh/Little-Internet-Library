import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css'
import library from '../assets/library.png';
import axios from "axios";

const Home = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
    // Function to fetch books
    const fetchBooks = async () => {
        try {
            const response = await axios.get("http://localhost:8000/books");
            setBooks(response.data.books); // Update the books state with fetched data
            console.log(books);
        } catch (error) {
            console.error("There was an error fetching the books:", error);
        }
    };

    fetchBooks();
    }, []);

    return (
        <main>
            <div className="container">
                <img src={library} alt="Library" />
                <ul className="book-list">
                    {books.map((book) => (
                        <li key={book.id}>
                            <button onClick={() => navigate(`/books/${book.id}`)}>
                                <img src={book.image} alt={book.title} />
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </main>
    )
}

export default Home;
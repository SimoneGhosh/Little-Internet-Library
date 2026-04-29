import { ErrorBoundary } from "react-error-boundary";
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from "axios";
import './Swap.css';

export default function Swap() {
  
  const { bookId } = useParams();
  const navigate = useNavigate();
  const [trade, setTrade] = useState(null);
  const [error, setError] = useState(null);

  async function bookSwap(formData) {
    const title = formData.get("title");
    const author = formData.get("author");
    const notes = formData.get("notes");
    
    if (!title || !author) {
      setError("Title and Author are required");
      return;
    }

    try {
      console.log(`Swapping "${title}" by ${author}`);
      const response = await axios.put(`http://localhost:8000/books/${bookId}`, {
        title,
        author,
        notes
      });
      setTrade(response.data.book);
      navigate("/");
    } catch (err) {
      setError(err.response?.data?.error || "There was an error swapping the book");
      console.error("Error:", err);
    }
  }

  return (
    <div className="swap-page">
      <h1>Book Swap</h1>
      <ErrorBoundary
        fallback={<p>There was an error while searching for your book</p>}
      >
        <form onSubmit={(e) => {
          e.preventDefault();
          bookSwap(new FormData(e.target));
        }} id="swap-form">
          <label htmlFor="title">Title: </label>
          <input name="title" id="title" placeholder="Book Title" required />

          <label htmlFor="author">Author: </label>
          <input name="author" id="author" placeholder="First Name, Last Name" required />

          <label htmlFor="notes">Notes: </label>
          <input name="notes" id="notes" placeholder="Leave a message for the next person :)" />

          <button type="submit">Trade Now!</button>
          {error && <p style={{color: 'red'}}>{error}</p>}
        </form>
      </ErrorBoundary>
    </div>
  );
}


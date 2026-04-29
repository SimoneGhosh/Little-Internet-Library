import { ErrorBoundary } from "react-error-boundary";
import { useActionState } from "react";
import './Swap.css';

export default function Swap() {
  async function bookSwap(prevState, formData) {
    "use server";
    const title = formData.get("title");
    const author = formData.get("author");
    try {
      //await signUpNewUser(email);
      console.log(`Swapping "${title}" by ${author}`);
    } catch (err) {
      return err.toString();
    }
  }

  const [bookDetails, swapAction] = useActionState(bookSwap, null);
  return (
    <div className="swap-page">
      <h1>Book Swap</h1>
      <ErrorBoundary
        fallback={<p>There was an error while searching for your book</p>}
      >
        <form action={swapAction} id="swap-form">
          <label htmlFor="title">Title: </label>
          <input name="title" id="title" placeholder="Book Title" />

          <label htmlFor="author">Author: </label>
          <input name="author" id="author" placeholder="First Name, Last Name" />

          <label htmlFor="notes">Notes: </label>
          <input name="notes" id="notes" placeholder="Leave a message for the next person :)" />

          <button type="submit">Trade Now!</button>
          {!!bookDetails && <p>{bookDetails}</p>}
        </form>
      </ErrorBoundary>
    </div>
  );
}


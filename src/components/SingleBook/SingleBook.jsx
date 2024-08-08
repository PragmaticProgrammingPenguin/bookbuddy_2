/* TODO - add your code to create a functional React component that renders details for a single book.
Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useNavigate } from "react-router-dom";
import "./SingleBook.css"
import NavBar from "../NavBar/Navigations";

export default function SingleBook({ book, parent }){
  const navigate = useNavigate();
  
  // If detailed view adjust styling
  const cardStyles = {
    width: parent ==="books" ? "90%" : "27%",
    margin: parent === "books" ? "0 auto " : null,
  }

    return (
      <div className="book" style={cardStyles}>
        {parent === "books" ? (
          <>
            <h1>Book Buddy</h1>
            <NavBar />
          </>
        ) : (
          null
        )}
        <h2>{book?.title}</h2>
        <img onClick={() => navigate(`/books/${book.id}`)} src={book?.coverimage} />
        <p>{book?.description}</p>
      </div>
    ); 
}
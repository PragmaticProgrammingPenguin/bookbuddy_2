/* TODO - add your code to create a functional React component that renders details for a single book.
Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import { useNavigate } from "react-router-dom";
import "./SingleBook.css"
import NavBar from "../NavBar/Navigations";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function SingleBook({ book, parent, token }){
  const navigate = useNavigate();
  
  //Switch between return and checkout methods
  const magicReturn = ({ token }) => {
    const method = 'true';
    magicMethod({ token, method })
  }

  const magicCheckout = ({ token }) => {
    const method = 'false';
    magicMethod({ token, method })
  }

  //Send request
  const magicMethod = ({ token, method }) => {
    try{
      axios({
        method: 'patch',
        url: `${BASE_URL}/books/${book.id}`,
        headers:{"Authorization": `Bearer ${token}`},
        data:{"available": `${method}`}
      })
        .catch((err) => console.log(err));
    } catch (err) {
      console.log(err)
    } 
    if(method = 'false') {
      navigate("/")
    }
  }

  const deleteReservation = ({ token }) => {
    try{
      axios
        .delete(`${BASE_URL}/reservations/${book.id}`, {headers:{"Authorization":`Bearer ${token}`}})
        .then(navigate('/'))
        .catch((err) => console.log(err))
    } catch (err) {
        console.log(err)
    }
  }

  //Alternate style if selected object
  const cardStyles = {
    width: parent ==="books" ? "90%" : "27%",
    margin: parent === "books" ? "0 auto " : null,
  }

    return (
      <div className="book" style={cardStyles}>
        {parent === "books" ? (
          <>
            <NavBar token={token} />
          </>
        ) : (
          null
        )}
        <h2>{book?.title}</h2>
        {parent === "books" ? (
          <img src={book?.coverimage} />
        ) : (
          <img onClick={() => navigate(`/books/${book.id}`)} src={book?.coverimage} />
        )}
        <p>{book?.description}</p>
        {parent === "books" ? (
          book?.available ? (
            <>
              <p>Available:</p>
              <button onClick={() => magicCheckout({ token })  }>Checkout</button>
            </>
          ) : (
            <>
              <p>Currently checked out</p>
              <button onClick={() => magicReturn({ token }) }>Magic Return</button>
            </>
          )
        ) : (
            parent === "reservations" ? (
              <button onClick={() => deleteReservation({ token }) }>Return</button>
            ) : (
              null
            )
          )
        }
      </div>
    ); 
}
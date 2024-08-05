import NavBar from "../components/NavBar/Navigations"
import Books from "../components/Books";
import { useState } from "react";
import "./Home.css"

export default function Home( {token, setToken} ){
    const [books, setBooks] = useState([]);
    const [booksToShow, setBooksToShow] = useState([])

    const BookSearch = (e) => {
        const searchResults = books.filter((book) =>
            book.name.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setBooksToShow(searchResults)
    }

    const handleLogout = () => {
        localStorage.removeItem("token")
        setToken(null)
    }

   return (
    <div>
        <h1>Book Buddy</h1>
        <NavBar />
        <br />
        <label id="bookSearch">
            Search for a book here:
            <input type="text" onChange={BookSearch} />
        </label>
        <h2>Our Library:</h2>
        <Books />
    </div>
   ) 
}
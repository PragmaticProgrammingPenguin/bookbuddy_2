import NavBar from "../../components/NavBar/Navigations";
import Books from "../../components/Books/Books";
import  React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Home({token, setToken}){
    const [books, setBooks] = useState([])
    const [booksToShow, setBooksToShow] = useState([])

    useEffect(() => {
        axios(`${BASE_URL}/books`)
            .then((data) => {
                setBooks(data.data.books)
                setBooksToShow(data.data.books)
            })
            .catch((err) => console.log(err))   
    }, [])

    const BookSearch = (e) => {
        const searchResults = books.filter((book) =>
            book.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setBooksToShow(searchResults)
    }

   return (
    <div>
        <h1>Book Buddy</h1>
        <NavBar />
        <br />
        <label id="bookSearch">
            Search for a book here:
            <input type="text" onChange={BookSearch}/>
        </label>
        <h2>Our Library:</h2>
        <Books books={booksToShow} />
    </div>
   ) 
}
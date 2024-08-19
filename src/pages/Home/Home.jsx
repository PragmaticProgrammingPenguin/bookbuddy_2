import NavBar from "../../components/NavBar/Navigations";
import Books from "../../components/Books/Books";
import  React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import "../../components/NavBar/Navigations.css"
const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Home({ token }){
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

    const bookSearch = (e) => {
        const searchResults = books.filter((book) =>
            book.title.toLowerCase().includes(e.target.value.toLowerCase())
        )
        setBooksToShow(searchResults)
    }
    
    const filterAvailable = (e) => {
        e.preventDefault()
        const availableSearch = books.filter((book) => book.available === true)
        setBooksToShow(availableSearch)
    }

    const removeFilter = (e) => {
        e.preventDefault()
        setBooksToShow(books)
    }

   return (
    <div>
        <NavBar token={token} />
        <br />
        <label id="bookSearch">
            Search for a book here:
            <input type="text" onChange={bookSearch}/>
        </label>
        <div className="filter">
            <button onClick={filterAvailable}>Filter Available</button>
            <button onClick={removeFilter}>Remove Filter</button>
        </div>
        <h2>Our Library:</h2>
        <Books books={booksToShow} />
    </div>
   ) 
}
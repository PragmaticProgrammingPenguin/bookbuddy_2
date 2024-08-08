/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog.
Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react"
import SingleBook from "../SingleBook/SingleBook"
import "./Books.css"

export default function Books({ books }){
  //Creates array from SingleBook.jsx
        return(
          <div className="book-list">
            {books?.map((book) => (
              <SingleBook key={book.id} book={book} />
            ))}
          </div>
        )
}
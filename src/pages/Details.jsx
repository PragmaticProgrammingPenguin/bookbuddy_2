import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom"
import axios from "axios";
import SingleBook from "../components/SingleBook/SingleBook";

export default function Details({token}){
    const { id } = useParams();
    const [book, setBook] = useState(null);
    useEffect(() => {
        axios(`${import.meta.env.VITE_BASE_URL}/books/${id}`)
            .then((response) => {
                setBook(response.data.book)
            })
            .catch((err) => console.log(err));
    }, []);
    return(
        <>
            <SingleBook book={book} parent="books" token={token} />
        </>
    )
}
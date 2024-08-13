/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import axios from "axios";
import "./Account.css"
import NavBar from "../../components/NavBar/Navigations";
import { useEffect, useState } from "react";
import SingleBook from "../../components/SingleBook/SingleBook";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Account({ token }){
    const [accountInfo, setAccountInfo] = useState({})

    useEffect(() => {
        FetchAcc({ token })
    }, [])
        
    const FetchAcc = ( {token} ) => {
        try{
            axios
                .get(`${BASE_URL}/users/me`, {headers:{"Authorization":`Bearer ${token}`}})
                .then((result) => {
                    setAccountInfo(result.data)
                })
                .catch(console.error);
        } catch (err) {
            console.log (err)
        }
    }

    const GetReservations = ({ reservations }) => {
        return(
            <div className="book-list">
                {reservations?.map((book) => (
                    <SingleBook key={book.id} book={book} parent="reservations" token={token} />
                ))}
            </div>
        )
    }

    const AccountNode = ({ accountInfo }) => {
        return(
            <div className="accountInfo">
                <p>Hello, {accountInfo?.email}</p>
                {accountInfo.books?.length === 0 ? (
                    <p>No books checked out.</p>    
                ) : (
                    null
                )}
            </div>
        )
    }

    return (
        <>
            <NavBar token={token} />
            <AccountNode  accountInfo={accountInfo} />
            <GetReservations reservations={accountInfo.books} />
        </>
    )
}
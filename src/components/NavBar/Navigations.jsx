/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import "./Navigations.css"

//Creates NavBar
export default function NavBar( {token} ){
    const handleLogout = () => {
        localStorage.removeItem("token")
        setToken(null)
    }

    return(
        <>
        <h1>Book Buddy</h1>
            <div className="NavBar">
                <Link to="/">See All Books</Link>
                {token ? (
                    <>
                        <Link to="/account">My Account</Link>
                        <Link onClick={handleLogout}>Logout</Link>
                    </>
                ) : (
                <Link to="/login">Login</Link>
                )}
            </div>
        </>
    )
}
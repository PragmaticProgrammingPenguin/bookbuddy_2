/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import Register from '../Register';
import Login from '../Login';
import Account from '../Account';
import { Link } from 'react-router-dom';
import "./Navigations.css"
export default function NavBar(){
    return(
        <div className="NavBar">
            <Link to="/">See All Books</Link>
            <Link to="/login">Login</Link>
        </div>
    )
}
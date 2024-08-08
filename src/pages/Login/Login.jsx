/* TODO - add your code to create a functional React component that renders a login form */
import "./Login.css"
import axios from "axios";
import { useState, useEffect } from "react";
import NavBar from "../../components/NavBar/Navigations";
import { Link, useNavigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default function Login({ token, setToken }){
    const navigate = useNavigate()
    const [formData, setFormData] = useState({})

    //If already logged in return to Home
    useEffect(() => {
        if (token) {
            navigate("/")
        }
    })

    //log user data
    const handleInput = (e) => {
       setFormData({ ...formData, [e.target.name]: e.target.value}) 
    }

    //POST to API
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            axios
                .post(`${BASE_URL}/users/login`) 
                .then((response) => {
                    if(response.data.success){
                        localStorage.setItem("token", response.data.token)
                        setToken(response.data.token)
                        navigate("/")
                    }
                })
                .catch((err) => console.error)
        } catch (err) {
            console.log(err)
        }
    }

    //serve login page
    return (
        <div>
            <h1>Book Buddy</h1>
            <NavBar />
            <div className="formContainer">
            <h2>Login</h2>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="email" onSubmit={handleInput} />
                    </label>
                    <label>
                        Password:
                        <input type="password" name="password" onSubmit={handleInput} />
                    </label>
                    <button>
                        Login
                    </button>
                    <p>Don't have an Account? <Link to="/register">Register Now!</Link></p>
                </form>
            </div>
        </div>
    )
}
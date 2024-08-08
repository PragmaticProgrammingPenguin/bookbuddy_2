/* TODO - add your code to create a functional React component that renders a registration form */
import axios from "axios";
import NavBar from "../../components/NavBar/Navigations";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Register.css"

const BASE_URL =  import.meta.env.VITE_BASE_URL;

export default function Register({ token, setToken }){
  const navigate = useNavigate()
  const [formData, setFormData] = useState({})

  //Back to Home if logged in
  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [token])

  //Creates key value pair from input
  const handleInput = (e) => {
    e.preventDefault()
    setFormData({ ...formData, [e.target.name]: e.target.value})
  }

  //Submit to API
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      axios
        .post(`${BASE_URL}/users/register`, formData)
        .then((response) => {
          if(response.data.success){
            localStorage.setItem("token", response.data.token)
            setToken(response.data.token)
            navigate("/")
          }
        })
        .catch ((err) => console.log(err))
    } catch (err) {
      console.log(err)
    }
  }

  //serve registration page
  return (
    <div>
      <NavBar token={token} />
      <div className="formContainer">
        <h2>Register Here</h2>
        <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="name" name="firstName" defaultValue="hs" onChange={handleInput} />
          </label>
          <label>
            Last Name:
            <input type="name" name="lastName" defaultValue="hs" onChange={handleInput} />
          </label>
          <label>
            Email:
            <input type="email" name="email" defaultValue="hs@hs.com" onChange={handleInput} />
          </label>
          <label>
            Password:
            <input type="password" name="password" defaultValue="hs" onChange={handleInput} />
          </label>
          <button>
            Submit
          </button>
        </form>
      </div>
    </div>
      )
}
import React, { useEffect, useState } from 'react'
import Account from './pages/Account/Account';
import Home from './pages/Home/Home';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import { Route, Routes } from "react-router-dom"
import Details from './pages/Details';

export default function App() {
  const [token, setToken] = useState(null)
  useEffect(() => {
    //Check for token
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home token={token} setToken={setToken} /> } />
        <Route path="/books/:id" element={<Details token={token} />} />

        <Route path="/account" element={<Account token={token} setToken={setToken} />} />
        <Route path="/register" element={<Register token={token} setToken={setToken}/> } />
        <Route path="/login" element={<Login token={token} setToken={setToken} /> } />

        <Route path="*" element={<Home token={token} setToken={setToken} />} />
      </Routes>
    </>
  )
}
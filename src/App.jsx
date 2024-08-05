import { useEffect, useState } from 'react'
import Account from './components/Account';
import Home from './pages/Home';
import Register from './components/Register';
import Login from './components/Login';
import { Route, Routes } from "react-router-dom"

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
        <Route path="/register" element={<Register /> } />
        <Route path="/account" element={<Account token={token} setToken={setToken} />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Home token={token} setToken={setToken} />} />
      </Routes>
    </>
  )
}
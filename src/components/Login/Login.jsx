import React, { useState } from "react";
import './Login.css'
import { Link, useNavigate } from "react-router-dom";
import { useStateValue } from "../../StateProvider";
import Storefront from "@mui/icons-material/Storefront";
import { auth } from "../../Firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function Login() {
  const navigate = useNavigate()
  const [{ user }, dispatch] = useStateValue()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = (e) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      dispatch({
        type: 'SET_USER',
        user: userCredential
      })
      navigate('/')
    })
    .catch(e => {
      console.error(`Failed to sign in: ${e}`)
    })
  }

  const register = e => {
    e.preventDefault()

    createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      dispatch({
        type: 'SET_USER',
        user: userCredential
      })
      navigate('/')
    })
    .catch(e => {
      console.error(`Failed to sign in: ${e}`)
    })
  }

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="login__logo">
          <Storefront className="login__logoImage" fontSize="large" />
          <h2 className="login__logoTitle">eShop</h2>
        </div>
      </Link>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form onSubmit={signIn}>
          <h5>email</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)}/>

          <h5>password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>

          <button type="submit" className="login__signInButton">Sign In</button>
        </form>

        <p>
          By signing in you agree to the eShop Website Conditions of Use &amp; Sale. Please
          see our Privacy Notice, our Cookie Notice and our Interest-Based Ads Notice.
        </p>

        <button className="login__registerButton" onClick={register}>Create your eShop Account</button>
      </div>
    </div>
  )
}

export default Login
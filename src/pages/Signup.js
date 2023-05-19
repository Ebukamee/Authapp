import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useNavigate } from "react-router-dom";
import "../assets/styles/login.css";
import { useDispatch } from "react-redux";
import { registerInitiate } from "../actions/authactions";
import { useSelector } from "react-redux";
import { updateProfile } from "firebase/auth";



export default function Signup() {
  const navigate = useNavigate()
   const [state, setState ]= useState ({
    email : '',
    password : '',
    displayName: '',
    confirm : ""
  })
  const Change = (e) => {
    let {name,value} = e.target
    setState({...state,[name]:value})
     console.log({...state,[name]:value})
  }
  const  {email,password,confirm,displayName} = state


  const dispatch = useDispatch()
 const   { Cuser }  = useSelector((state) => state.auth)
 const   { authError }  = useSelector((state) => state.auth)
 const   { loading }  = useSelector((state) => state.auth)
  const Submit = (e) => {
    e.preventDefault();
    if (password === confirm) {
      dispatch(registerInitiate(email,password,displayName));
       updateProfile(Cuser, {
                displayName
            });
      console.log(state)
      console.log(authError)
      console.log(Cuser)
    }
    else {
      alert('Password does not match')
      window.location.reload()
    }
  }


  
  return (
    <>
      <Helmet>
        <title>Room | Signup</title>
        <meta name="description" content="Login" />
        <link rel="canonical" href="/login" />
      </Helmet>
      <form onSubmit={Submit}>
        <h1>Create Account</h1>
        <label>Email Address</label>
        <input
          type="email"
          className="input"
          placeholder="Enter your email address"
          required
          onChange={Change}
          name="email"
        />
        <label>UserName</label>
         <input
          type="text"
          className="input"
          placeholder="Enter Username"
          required
          onChange={Change}
          name="displayName"
        />
        <label>Enter Password</label>
        <input
          type="password"
          className="input"
          placeholder="Enter password"
          required
          onChange={Change}
          name="password"
        />
        <label>Confirm Password</label>
        <input
          type="password"
          className="input"
          placeholder="Enter password"
          required
          onChange={Change}
          name="confirm"
        />
        <p className="p" id="red">{authError ? authError : ''}</p>
        <button>{loading ? 'Loading...' : 'Create Account'}</button>
      </form>
      <p className="p">
        Already Registered?{" "}
        <Link className="link" to="/login">
          Sign In
        </Link>{" "}
      </p>
    </>
  );
}

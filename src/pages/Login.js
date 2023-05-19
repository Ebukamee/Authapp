import { Helmet } from "react-helmet";
import { Component } from "react";
import { Link } from "react-router-dom";
import '../assets/styles/login.css'
import { connect } from "react-redux";
import { loginInitiate } from "../actions/authactions";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

function Login () {
 const navigate = useNavigate()
  const [state, setState ]= useState ({
    email : '',
    password : ''
  })
  const  {email,password} = state


  const dispatch = useDispatch()
 const   { Cuser }  = useSelector((state) => state.auth)
 const   { authError }  = useSelector((state) => state.auth)
 const   { loading }  = useSelector((state) => state.auth)


  const Change = (e) => {
    let {name,value} = e.target
    //  console.log({name}.value)
    setState({...state,[name]:value})
     console.log({...state,[name]:value})
  }
  const Submit = (e) => {
    e.preventDefault();
    if (email && password) {
      dispatch(loginInitiate(email,password))
      navigate('/dashboard')
    }
    setState({email : '',password:""})
    console.log(Cuser)
    console.log(authError)
    // navigate('/dashboard')
  }
    return (
      <>
        <Helmet>
          <title>Room | Login </title>
          <meta name="description" content="Login" />
          <link rel="canonical" href="/login" />
        </Helmet>
        <form onSubmit={Submit}>
        <h1>Login</h1>
          <label>Email Address</label>
          <input type="email" className="input" placeholder="Enter your email address" name='email' onChange={Change}  required />
          <label>Password</label>
          <input type="password" className="input" placeholder="Enter password" name='password' onChange={Change} required />
          <p className="p" id="red">{authError ? authError : ''}</p>
          <button>{loading ? 'Loading...' : 'Log In'}</button>
        </form>
        <p className="p">Don't have an account? <Link className="link" to='/signup'>Sign Up</Link> </p>
      </>
    );
  }
// const mapDispatchToProps =(dispatch) => {
//   return {
//     signIn : (creds) => dispatch(signIn(null, creds))
//   }
// }

// export default connect(null, mapDispatchToProps)(Login)
export default Login;
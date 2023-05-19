import { useContext, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { UserContext } from "../componets/Context";
import { Helmet } from "react-helmet";
import { theUsers } from "../componets/Context";
import Home from "./Home";







export default function Login() { 
    const[value,setValue]=useContext(UserContext)
    const navigate = useNavigate()
    const [username, setUsername] = useState("")
    function UsernameChange(event) {
        setUsername(event.target.value)
    }
    const [password, setPassword] = useState("")
    function PasswordChange(event) {
        setPassword(event.target.value)
    }
    const [errors, setError] = useState("")
     function onSubmitHandler(event) {
        event.preventDefault();
        
        const getValueElement = theUsers.find((val) => val.username == username && val.password == password)
        const checkValueExists =  theUsers.some((val) => val.username == username && val.password == password)
        console.log(username, password)
        if (checkValueExists) {
            getValueElement.isAuthenticated = true
            const setValue = () => {
              setValue(getValueElement)
            }
            navigate('/dashboard');
        }
        else {
            setError("Inavlid User. Use details specified in this page")
            console.log('username or password doesnt match')
        }
    }
    

  return (
 <>
 <Helmet>
          <title>Room | Login </title>
           <meta name="description" content="Login" />
          <link rel="canonical" href="/login" />
       </Helmet>
  <form className="login" onSubmit={onSubmitHandler}>
    <input name="username" placeholder="Username" type='text' onChange={UsernameChange} />
    <input name="password" placeholder="Password" type='password' onChange={PasswordChange}/>
    {errors && <h4 style={{ color: 'red' }}>{errors}</h4>}
    <button className="button">Login</button>
  </form>
  <div className="can">
    <h3>You can log in with</h3>
    <p><span>Username: </span>Nnamdi <span>Password:</span> Nna_guy</p>
    <p><span>Username: </span> Onyeisi <span>Password:</span> boss123</p>
    <p><span>Username: </span> Arinze <span>Password:</span> Aristotle</p>
    <p><span>Username: </span> Somto <span>Password:</span> Theman</p>
    <p><span>Username: </span> Ikenna <span>Password:</span> Power</p></div></>
  )
}
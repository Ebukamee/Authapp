import React from "react";
import "../assets/styles/Dashboard.css";
import { Helmet } from "react-helmet";
import Logo from "../assets/images/logo1.svg";
import Cart from "../assets/images/cart.svg";
import One from "../assets/images/Funiture1.jpg";
import Two from "../assets/images/funiture2.jpg";
import Three from "../assets/images/Funiture3.jpeg";
import Four from "../assets/images/Funiture4.jpeg";
import { useSelector } from "react-redux";
import { logOut } from "../actions/authactions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const   { Cuser }  = useSelector((state) => state.auth)
  let {logout} =  useSelector((state) => state.auth)

  const Logout = (e) => {
    if (Cuser) {
      dispatch(logOut());
    }
  }
  useEffect(() => {
    if(Cuser === null && !logout) {
      navigate('/redirect')
      setTimeout(() => {
        navigate('/login')
      },5000)
    }
    else if (!Cuser && logout ) {
      navigate('/redirect')
      setTimeout(() => {
        navigate('/')
      },3000)
    }

    else return;
  }, [navigate, Cuser])

  const Email = Cuser ? Cuser.reloadUserInfo.email : null
  const userName = Cuser ? Cuser.reloadUserInfo.displayName : null
  const destructure =Email ? Email.charAt(0) : null
  const initial =destructure ? destructure.toUpperCase() : null
  return (
    <>
      <Helmet>
        <title>Room | Dashboard</title>
        <meta name="description" content="Dashboard" />
        <link rel="canonical" href="/dashboard" />
      </Helmet>
      <nav id="nav">
          <span>
            <img src={Logo} alt="logo" />
          </span>
          <span id="span">
            <button onClick={Logout}> Log out </button>
            <span className="circle">{initial}</span>
            <img src={Cart} alt="cart" />
          </span>
        </nav>
      <div className="Dashboard">
        
          <h1>Welcome back, {userName}</h1>
          <p>
            This is your Room dashboard, we you can shop for all the latest
            funitures from the comort of your home
          </p>
        <div className="products">
          <div className="product">
            <img src={One} alt="chair" />
            <h3>$2,500</h3>
            <p>4.79/5.00 Rating</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src={Two} alt="chair" />
            <h3>$2,200</h3>
            <p>4.65/5.00 Rating</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src={Three} alt="chair" />
            <h3>$2,200</h3>
            <p>4.67/5.00 Rating</p>
            <button>Add to Cart</button>
          </div>
          <div className="product">
            <img src={Four} alt="chair" />
            <h3>$2,500</h3>
            <p>4.79/5.00 Rating</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </>
  );
}

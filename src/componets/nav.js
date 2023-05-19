import "../assets/styles/nav.css";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Menu from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close.svg";
import Logo from "../assets/images/logo.svg";
import { Link } from "react-router-dom";

//Create the Nav Componet
function Nav() {
  let [name, setName] = useState("notDisplay");
  const Toggle = () => {
    setName("menum");
  };
  const Return = () => {
    setName("notDisplay");
  };
  return (
    <div className="nav">
      <div className="mobile">
        <img src={Menu} alt="menu" className="img" id="img" onClick={Toggle} />
        <div id="logo">
          <img src={Logo} alt="logo" className="logo" />
        </div>

        <div className={name}>
          <img src={Close} alt="close" className="img" onClick={Return} />
         <span className="span">
         <span>home</span>
         <Link className="link" to='/login'><span>shop</span></Link>
          <span>about</span>
          <span>contact</span>
         </span>
        </div>
      </div>
      <nav className="desktope">
        <img src={Logo} alt="logo" className="logo" />
         <ul>
            <li>contact</li>
            <li>about</li>
            <Link className="link" to='/login'><li>shop</li></Link>
            <li>home</li>
         </ul>
      </nav>
    </div>
  );
}

export default Nav;

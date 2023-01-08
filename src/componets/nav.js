import "../assets/styles/nav.css"
import { NavLink } from "react-router-dom";

//Create the Nav Componet
function Nav() {
    const blue= 'rgba(47,136,255,1)';
    const white='rgba(255,255,255)'
    return (
        <div className="nav">
            <h3 className="logo">Vigro</h3>
            <div className="links">
             <NavLink className='link' to="/" style={({isActive}) => isActive ? {color: blue} : {color: {white}} }>Home </NavLink>
             <NavLink className='link' to="/testError" style={({isActive}) => isActive ? {color: blue} : {color: {white}} }>Test Error Boundary </NavLink>
             <NavLink className='link' to="/login" style={({isActive}) => isActive ? {color: blue} : {color: {white}} }>Dashboard</NavLink>
            </div>
        </div>
    )
}

export default Nav;
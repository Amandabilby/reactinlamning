import React from "react";
import {Link} from "react-router-dom";



const Navbar = ()=>{

    return(
        <nav className={"navbar"}>
  <Link className={"nav-item"} to="/">FRISÖR</Link>
      <Link className={"nav-item"} to="/">Hem <span className="sr-only">(current)</span></Link>
      <Link className={"nav-item"} to="/card">Frisör</Link>
      <Link className= {"nav-item"} to="/Form">Boka tid</Link>
       <Link className={"nav-item"} to="/bookings">Mina sidor</Link>
  
</nav>
    )
}

export default Navbar;
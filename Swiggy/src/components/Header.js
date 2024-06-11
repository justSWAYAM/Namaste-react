import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header =() =>{

  const [btnName , setbtnName] = useState("Login");
    return (
    <div className="header">        

    <div className="logo-Container">
   <img 
   className="logo"
   src= {LOGO_URL}/>
            
    </div>
             
    <div className="Nav-list">
      <ul>
     
     <li> <Link to ="/">Home</Link></li>
     <li> <Link to ="/about">About </Link></li>
    <li> <Link to ="/contact">Contact </Link></li>
    <li>Cart</li>

    <button className="Login" 
    onClick={ () =>{
    btnName === "Login" ? setbtnName ("Logout") : setbtnName ("Login");
    }}
     > {btnName}
      </button>     
      </ul>
     </div>
  </div>
);
};

export default Header;
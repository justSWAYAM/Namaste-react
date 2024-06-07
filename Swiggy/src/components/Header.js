import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";

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
     
     <li>Home</li>
     <li>About</li>
    <li>Contact</li>
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
import { LOGO_URL } from "../utils/constants.js";

const Header =() =>{
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
     
      </ul>
     </div>
  </div>
);
};

export default Header;
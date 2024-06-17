import { LOGO_URL } from "../utils/constants.js";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header =() =>{
  const OnlineStatus = useOnlineStatus();
  const [btnName , setbtnName] = useState("Login");
    return (
    <div className="flex justify-between shadow-lg border border-solid border-black rounded-2xl">        

    <div className="logo-Container">
   <img 
   className="w-[115px]"src= {LOGO_URL}/>
            
    </div>
             
    <div className="flex items-center ">
      <ul className="flex p-5 m-5">
      <li className="px-5"> OnlineStatus : {OnlineStatus ? "🟢" : "🔴"}</li>
     <li className="px-5"> <Link to ="/">Home</Link></li>
     <li className="px-5"> <Link to ="/about">About </Link></li>
    <li className="px-5"> <Link to ="/contact">Contact </Link></li>
    <li className="px-5"> <Link to = "/grocery">Grocery</Link></li>
    
    <li className="px-5">Cart</li>
    <li  className="px-5 flex items-center ">
     <div className=" bg-orange-300 flex items-center justify-center h-full">
    <button className="Login shadow-xl px-4 py-2   " 
    onClick={ () =>{
    btnName === "Login" ? setbtnName ("Logout") : setbtnName ("Login");
    }}
     > {btnName}
      </button>
      </div>  
      </li>   
      </ul>
     </div>
  </div>
);
};

export default Header;
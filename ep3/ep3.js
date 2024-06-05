import React from "react";
import ReactDOM from "react-dom/client";


const Title = () =>(
    <h1 className = "head" tabIndex="5" >Namaste Swayam</h1>

);

const HeadingComponent = () => (
    <div id ="Container">

       <Title>  </Title>
    <h1 className = "Main" > Hello Learning React 🚀🚀 </h1>
    
    </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent />);
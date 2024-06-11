
import User from "./User"
import UserClass from "./UserClass"
import React from "react";
class  About extends React.Component {
    constructor(props) {
        super(props);

        // console.log("parent componentDidMount");
    }
    render() {
        // console.log("Parent -render");
    return (
        <div className="About-section">
            <h1>About</h1>
            <h2> I am "Swayam" Mishra Learning React From Akshay Saini </h2>
            <UserClass/>
            
        </div>
    );
}
}

export default About
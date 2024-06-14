import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
          Userinfo :{},
    };
}
   async componentDidMount() {
      const data = await fetch ("https://api.github.com/users/justSWAYAM");
      const json = await data.json();  
    

    this.setState({
        Userinfo:json,
        
    });
}

     render() {
        
        const {name ,login,avatar_url} = this.state.Userinfo;
        

        return (
            <div className="user-info">
            <div className="user-card-class">
               <h1>Name : {name}</h1>  
               <h3>Login :{login}</h3>
               <div className="github-profile-container">
               <img  className = "github-profile" src={avatar_url} alt="avatar" />
               </div>
               
               
            </div>
            </div>
        );
     }
    }

export default UserClass;

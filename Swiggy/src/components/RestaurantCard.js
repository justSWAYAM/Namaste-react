import { CDN_URL} from "../utils/constants.js";


 const RestaurantCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId,name,avgRating,deliveryTime,cuisines,}= resData?.info;

    return (
        <div className="Res-card" style={{backgroundColor: "#f0f0f0"}}>
    <img
    className="res-logo" 
    alt="res-logo"
    src={CDN_URL+cloudinaryImageId} />
     
     <h3>{name}</h3>

     <h4>{cuisines.join(" , ")}</h4>
     
     <h4>{avgRating}- Avg-Rating</h4>
     
     <h4>{deliveryTime} -Delivery Time</h4>
     
   </div>
    );
};

export default RestaurantCard;
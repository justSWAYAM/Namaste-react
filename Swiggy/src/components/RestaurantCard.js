import { CDN_URL} from "../utils/constants.js";


 const RestaurantCard = (props) =>{
    const {resData} = props;
    const{cloudinaryImageId,name,avgRating,cuisines,}= resData?.info;
    const{deliveryTime} = resData?.info?.sla;

    return (
        <div className="Res-card m-10 p-10 w-[290px] h-[550px] shadow-2xl hover:bg-gray-100 overflow-hidden">
    <img
    className="res-logo rounded-lg shadow-lg h-[220px] w-[270px]" 
    alt="res-logo"
    src={CDN_URL+cloudinaryImageId} />
     
     <h3 className="font-bold py-5 text-lg">{name}</h3>

     <h4 className="py-3">{cuisines.join(" , ")}</h4>
     
     <h4 className="py-3">{avgRating}- Avg-Rating</h4>
     
     <h4 className="py-3">{deliveryTime}min -Delivery Time</h4>
     
   </div>
    );
};

export default RestaurantCard;
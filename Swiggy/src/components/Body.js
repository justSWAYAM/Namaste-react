import resList from "../utils/mockData.js";

import RestaurantCard from "./RestaurantCard.js";

const Body =()=>{
    return (
    <div className="body">
    <div className="Search">Search</div>
    <div className="Res-container">
    {
        resList.map(restaurant => (<RestaurantCard key ={restaurant.info.id} resData={restaurant} />))
    }
    </div>
    </div>
    );
};

export default Body;
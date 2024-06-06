
import RestaurantCard from "./RestaurantCard.js";
import { useState } from "react";
import resList from "../utils/mockData.js";

const Body =()=>{

    
const [ListOfRestaurant, SetRestaurantList] = useState(resList);

    return (
    <div className="body"> 

    <div className="filter">

    <button className="Filter-btn-Top"
    onClick={() => {
        
       const FilteredList = ListOfRestaurant.filter( (res) => res.info.avgRating > 4.2);

    console.log(FilteredList);
    
   SetRestaurantList(FilteredList);
}}

    > Top Rated Restaurant </button>
    </div>

    <div className="Res-container">
    {
        ListOfRestaurant.map(restaurant => (<RestaurantCard key ={restaurant.info.id} resData={restaurant} />))
    }
    </div>
    </div>
    );
};

export default Body;
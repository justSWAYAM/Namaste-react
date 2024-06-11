
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import {useParams} from "react-router-dom";
import { MENU_API } from "../utils/constants.js";
const RestaurantMenu = () => {

    const[resInfo,setResInfo] = useState(null);

    const {resId} = useParams();

    useEffect(() => {
    fetchMenu();
    },[]);

   const fetchMenu = async () =>{
   const data =await fetch(MENU_API+resId);
   const menu = await data.json();
   console.log(menu);
   setResInfo(menu);
   };

   if(resInfo === null) return <Shimmer/>;

    const {name,cuisines,costForTwoMessage} = resInfo.data?.cards[2]?.card?.card?.info;

    const{itemCards} = resInfo.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    console.log(itemCards);

  return (
    <div className="menu">
      <h1>{name}</h1>
      <p>{cuisines.join(", ")} - {costForTwoMessage} </p>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
        <li key={item?.card?.info?.id}>{item?.card?.info?.name} - {(item?.card?.info?.price/100)  || (item?.card?.info?.defaultPrice/100)}{" Rs"}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

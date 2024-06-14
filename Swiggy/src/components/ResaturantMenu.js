
import Shimmer from "./Shimmer.js";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu.js";
const RestaurantMenu = () => {

    const {resId} = useParams(); 

   const resInfo = useRestaurantmenu(resId);

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
import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";

const Body = () => {
    const [restaurantList, setRestaurantList] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [filteredResList, setFilteredResList] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await response.json();
        console.log(json);

        setRestaurantList(json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredResList(json.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if (restaurantList.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
        <div className="filter-search">
        <div className="search-container">
        <input
        className="search-bar"
        type="text"
        placeholder="Search for Restaurant"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
    />
        <button className="search-btn" onClick={() => {
        const filteredResList = restaurantList.filter(res => 
        res.info.name.toLowerCase().includes(searchText.toLowerCase()));

        setFilteredResList(filteredResList);
        }}>
            Search
        </button>
    </div>

                <div className="filter">
                 <button
                 className="Filter-btn-Top"
                onClick={() => {
                const filteredList = restaurantList.filter(restaurant => restaurant.info.avgRating > 4.2);
                setFilteredResList(filteredList);
                        }}
                    >
                        Top Rated Restaurants
            </button>
            </div>
            </div>

            <div className="Res-container">
                {filteredResList.map(restaurant => (
                  <Link key = {restaurant.info.id} to = {"/restaurants/"+restaurant.info.id}>  <RestaurantCard resData={restaurant}/></Link>
                ))}
            </div>
        </div>
    );
};

export default Body;



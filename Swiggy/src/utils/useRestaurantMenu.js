import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null); // Ensure the initial state is null

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(MENU_API + resId);
      const json = await data.json();
      setResInfo(json.data);
    };
    fetchData();
  }, []); // Add resId to the dependency array

  return resInfo;
};

export default useRestaurantMenu;

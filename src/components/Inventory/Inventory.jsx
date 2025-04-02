import "./inventory.scss"
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../ItemCard/ItemCard";

const Inventory = () => {
  const [skins, setSkins] = useState([]);

  useEffect(() => {
    const storedSkins = localStorage.getItem("cs2Skins");
    
    if (storedSkins) {
      const parsedData = JSON.parse(storedSkins);
      setSkins(parsedData.filter(item => item.weapon.name === "AK-47"))
      console.log(parsedData);
    } else {
      const fetchSkins = async () => {
        try {
          const response = await axios.get("https://bymykel.github.io/CSGO-API/api/en/skins.json");
          const data = response.data;
          console.log(data);
          
          localStorage.setItem("cs2Skins", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching skins:", error);
        }
      };
      
      fetchSkins();
    }
  }, []);

  return (
    <div className="inventory-container">
      <ItemCard />
      {/* <ul>
        {skins.map((skin) => (
          <li key={skin.id}>
            <img src={skin.image} alt={skin.name} width={100} />
            <p>{skin.name}</p>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default Inventory;

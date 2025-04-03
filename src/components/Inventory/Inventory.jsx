import "./inventory.scss";
import React, { useEffect, useState } from "react";
import axios from "axios";
import ItemCard from "../ItemCard/ItemCard";
import defaultLoadout from "../../assets/items/items";
import useItemStore from "../../store/itemStore";

export default function Inventory() {
  const { userLoadoutStore } = useItemStore();

  useEffect(() => {
    const cs2SkinsLocalStorage = localStorage.getItem("cs2Skins");

    if (!cs2SkinsLocalStorage) {
      const fetchSkins = async () => {
        try {
          const response = await axios.get("https://bymykel.github.io/CSGO-API/api/en/skins.json");
          const data = response.data;
          localStorage.setItem("cs2Skins", JSON.stringify(data));
        } catch (error) {
          console.error("Error fetching skins:", error);
        }
      };
      
      fetchSkins();
    }

    // Ensure userLoadout is in localStorage
    if (!localStorage.getItem("userLoadout")) {
      localStorage.setItem("userLoadout", JSON.stringify(defaultLoadout));
    }
  }, []);

  return (
    <>
      <div className="inventory-container page-container">
        {userLoadoutStore
          .filter(item => item.category.name.toLowerCase() === "pistols")
          .map((item, index) => (
            <ItemCard
            key={item.id}
            weapon={item.value}
            itemName={item.name} 
            weaponName={item.weapon.name} 
            skinImage={item.image}
            rarity={item.rarity.color}
            />
          ))
        }
      </div>

      <div className="inventory-container page-container">
        {userLoadoutStore
          .filter(item => item.category.name.toLowerCase() === "rifles")
          .map((item, index) => (
            <ItemCard
            key={item.id}
            weapon={item.value}
            itemName={item.name} 
            weaponName={item.weapon.name} 
            skinImage={item.image}
            rarity={item.rarity.color}
            />
          ))
        }
      </div>
    </>
  );
};
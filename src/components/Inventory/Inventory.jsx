import "./inventory.scss";
import React, { useEffect, useState } from "react";
import ItemCard from "../ItemCard/ItemCard";
import useInventoryStore from "../../store/inventoryStore";

export default function Inventory() {
  const { userLoadoutStore } = useInventoryStore();

  return (
    <>
      <div className="inventory-container page-container">
        <h2>Rifles</h2>
        <div className="inventory-container__inner">
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
      </div>

      <div className="inventory-container page-container">
        <h2>Pistols</h2>
        <div className="inventory-container__inner">
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
      </div>
    </>
  );
};
import './finder.scss'
import React, { useState, useEffect } from 'react';
import SkinCard from '../SkinCard/SkinCard';
import useInventoryStore from '../../store/inventoryStore';

export default function Finder() {
    const { itemInFocus, finderIsOpen, setFinderStatus, currentFaction } = useInventoryStore();
    const [skins, setSkins] = useState([]);

    const rarityOrder = [
      "#eb4b4b",
      "#d32ce6",
      "#8847ff",
      "#4b69ff", 
      "#5e98d9"  
    ];

    // const sortByRarity = () => {
    //   const sorted = [...skins].sort((a, b) => {
    //     const indexA = rarityOrder.indexOf(a.rarity.color || a.rarity);
    //     const indexB = rarityOrder.indexOf(b.rarity.color || b.rarity);
    
    //     return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
    //   });
    
    //   setSkins(sorted);
    // };

    useEffect(() => {
      let storedSkins = null;
      
      if (itemInFocus.category === "agent") {
        storedSkins = localStorage.getItem("cs2Agents");
      } else {
        storedSkins = localStorage.getItem("cs2Skins");
      }
    
      if (!storedSkins) return;
    
      const parsedData = JSON.parse(storedSkins);
      let matchedSkins = [];
    
      const nameMatches = parsedData.filter(skin => skin.weapon.name === itemInFocus.name);
    
      if (itemInFocus.category === "agent") {
        matchedSkins = parsedData.filter(skin => skin.team === currentFaction);

      } else if (nameMatches.length === 0 && itemInFocus.category !== "agent") {
        matchedSkins = parsedData.filter(skin => skin.category.name === itemInFocus.category);

      } else if (itemInFocus.category === "Knives" || itemInFocus.category === "Gloves") {
        matchedSkins = parsedData.filter(skin => skin.category.name === itemInFocus.category);

      } else if (nameMatches.length === 0 && itemInFocus.category === "agent") {
        matchedSkins = parsedData.filter(skin => skin.team === currentFaction);
        
      } else {
        matchedSkins = nameMatches;
      }

      const sorted = [...matchedSkins].sort((a, b) => {
        const indexA = rarityOrder.indexOf(a.rarity.color || a.rarity);
        const indexB = rarityOrder.indexOf(b.rarity.color || b.rarity);
    
        return (indexA === -1 ? Infinity : indexA) - (indexB === -1 ? Infinity : indexB);
      });
      
      setSkins(sorted);
    }, [itemInFocus]);
    
    return (
        <>
            {finderIsOpen && (
                <dialog open>
                    <div className='finder page-container'>

                      <div className='finder__header'>
                        <button className='finder__sort-button' onClick={() => sortByRarity()}>sort by: rarity</button>
                        <button className='button-cancel' onClick={() => setFinderStatus('', '', null)}></button>
                      </div>

                      <ul className='finder__item-list'>
                          {skins.map((skin, index) => (
                              <SkinCard 
                                  key={index}
                                  skin={skin}
                                  skinName={skin.name}
                                  skinImage={skin.image}
                                  rarity={skin.rarity.color || skin.rarity}
                              />
                          ))}
                      </ul>
                    </div>
                </dialog>
            )}
        </>
    );
}

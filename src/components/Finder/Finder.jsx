import './finder.scss'
import React, { useState, useEffect } from 'react';
import SkinCard from '../SkinCard/SkinCard';
import useInventoryStore from '../../store/inventoryStore';

export default function Finder() {
    const { itemInFocus, finderIsOpen, setFinderStatus, currentFaction } = useInventoryStore();
    const [skins, setSkins] = useState([]);

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
    
      if (nameMatches.length === 0 && itemInFocus.category !== "agent") {
        matchedSkins = parsedData.filter(skin => skin.category.name === itemInFocus.category);
      } else if (itemInFocus.category === "Knives" || itemInFocus.category === "Gloves") {
        matchedSkins = parsedData.filter(skin => skin.category.name === itemInFocus.category);
      } else if (nameMatches.length === 0 && itemInFocus.category === "agent") {
        matchedSkins = parsedData.filter(skin => skin.team === currentFaction);
      } else {
        matchedSkins = nameMatches;
      }
      
      setSkins(matchedSkins);
    }, [itemInFocus]);
    

    return (
        <>
            {finderIsOpen && (
                <dialog open>
                    <div className='finder page-container'>
                      <div>
                        <button onClick={() => setFinderStatus('', '', null)}>Close</button>
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

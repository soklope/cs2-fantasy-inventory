// Finder Component
import './finder.scss'
import axios from "axios";
import React, { useState, useEffect } from 'react';
import SkinCard from '../SkinCard/SkinCard';
import useInventoryStore from '../../store/inventoryStore';

export default function Finder() {
    const { item, finderIsOpen, setFinderStatus } = useInventoryStore();
    const [skins, setSkins] = useState([]);

    useEffect(() => {
      const storedSkins = localStorage.getItem("cs2Skins");

      if (storedSkins) {
        const parsedData = JSON.parse(storedSkins);

        let matchedSkins = []
        const nameMatches = parsedData.filter(skin => skin.weapon.name === item.name);
        
        if (nameMatches.length === 0) {
          matchedSkins = parsedData.filter(skin => skin.category.name === item.category);
        } else if (item.category === "Knives" || item.category === "Gloves") {
          matchedSkins = parsedData.filter(skin => skin.category.name === item.category);
        } else {
          matchedSkins = nameMatches;
        }

        setSkins(matchedSkins);
      } 
    }, [item]);

    return (
        <>
            {finderIsOpen && (
                <dialog open>
                    <div className='finder page-container'>
                        <button onClick={() => setFinderStatus('', '')}>Close</button>  {/* Close the finder with no name/category */}
                        <ul className='finder__item-list'>
                            {skins.map((skin, index) => (
                                <SkinCard 
                                    key={index}
                                    item={skin}
                                    skinName={skin.name}
                                    skinImage={skin.image}
                                    rarity={skin.rarity.color}
                                />
                            ))}
                        </ul>
                    </div>
                </dialog>
            )}
        </>
    );
}

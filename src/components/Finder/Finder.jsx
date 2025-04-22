import './finder.scss'
import React, { useState, useEffect } from 'react';
import SkinCard from '../SkinCard/SkinCard';
import useInventoryStore from '../../store/inventoryStore';
import sortByRarity from '../../helpers/sortFinder';

export default function Finder() {
    const { itemInFocus, finderIsOpen, setFinderStatus, currentFaction } = useInventoryStore();
    const [skins, setSkins] = useState([]);
    const [order, setOrder] = useState("asc")

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

      setSkins(sortByRarity(matchedSkins, "asc"));

    }, [itemInFocus]);

    useEffect(() => {
      if (finderIsOpen) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    
      return () => {
        document.body.style.overflow = "";
      };
    }, [finderIsOpen]);

    const changeOrder = () => {
      if (order === "asc") {
        setSkins(sortByRarity(skins, "desc")),
        setOrder("desc")
      } else (
        setSkins(sortByRarity(skins, "asc")),
        setOrder("asc")
      )
    }
    
    return (
        <>
            {finderIsOpen && (
                <dialog open>
                    <div className='finder page-container'>

                      <div className='finder__header'>
                        <button className='finder__sort-button' onClick={() => changeOrder()}>sort by rarity: <span>{order}</span></button>
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

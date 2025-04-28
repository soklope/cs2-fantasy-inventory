import './finder.scss'
import React, { useState, useEffect } from 'react';
import SkinCard from '../SkinCard/SkinCard';
import useInventoryStore from '../../store/inventoryStore';
import useSkinFilterStore from '../../store/skinFilterStore';
import sortByRarity from '../../helpers/sortFinder';
import SkinFilter from '../SkinFilter/SkinFilter';

export default function Finder() {
    const { itemInFocus, finderIsOpen, currentFaction } = useInventoryStore();
    const skinsInFinder = useSkinFilterStore((state) => state.skinsInFinder);
    const setSkinsInFinder = useSkinFilterStore((state) => state.setSkinsInFinder);
    const setSkinsInFinderCopy = useSkinFilterStore((state) => state.setSkinsInFinderCopy);

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

      setSkinsInFinder(sortByRarity(matchedSkins, "desc"));
      setSkinsInFinderCopy(sortByRarity(matchedSkins, "desc"));
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

    return (
        <>
            {finderIsOpen && (
                <dialog open>
                    <div className='finder page-container'>
                      <SkinFilter />

                      <ul className='finder__item-list'>
                          {skinsInFinder.map((skin, index) => (
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

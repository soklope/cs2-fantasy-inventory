import './finder.scss'
import React, { useState, useEffect } from 'react';
import SkinCard from '../SkinCard/SkinCard';
import useInventoryStore from '../../store/inventoryStore';
import useSkinFilterStore from '../../store/skinFilterStore';
import sortByRarity from '../../helpers/sortFinder';
import SkinFilter from '../SkinFilter/SkinFilter';
import allSkins from '../../helpers/all-skins-and-agents.json'

export default function Finder() {
    const { itemInFocus, finderIsOpen, currentFaction, setFinderStatus } = useInventoryStore();
    const skinsInFinder = useSkinFilterStore((state) => state.skinsInFinder);
    const setSkinsInFinder = useSkinFilterStore((state) => state.setSkinsInFinder);
    const setSkinsInFinderCopy = useSkinFilterStore((state) => state.setSkinsInFinderCopy);

    const itemInFocusIsKnife = itemInFocus.category === "Knives"

    useEffect(() => {
      let matchedSkins = [];
      let matchedSkinsCopy = []; // for filtering purpose if knife or gloves
    
      const nameMatches = allSkins.filter(skin => skin.weapon === itemInFocus.name);
    
      if (itemInFocus.category === "agent") {
        matchedSkins = allSkins.filter(skin => skin.team === currentFaction);

      } else if (nameMatches.length === 0 && itemInFocus.category !== "agent") {
        matchedSkins = allSkins.filter(skin => skin.category === itemInFocus.category);

      } else if (itemInFocus.category === "Gloves") {
        matchedSkins = allSkins.filter(skin => skin.category === itemInFocus.category);
        matchedSkinsCopy = matchedSkins;

      } else if (itemInFocus.category === "Knives") {
        matchedSkins = allSkins.filter(skin => skin.weapon === itemInFocus.weaponType);
        matchedSkinsCopy = allSkins.filter(skin => skin.category === itemInFocus.category);

      } else if (nameMatches.length === 0 && itemInFocus.category === "agent") {
        matchedSkins = allSkins.filter(skin => skin.team === currentFaction);
        
      } else {
        matchedSkins = nameMatches;
      }
      
      setSkinsInFinderCopy(sortByRarity(itemInFocusIsKnife ? matchedSkinsCopy : matchedSkins, "desc"));
      setSkinsInFinder(sortByRarity(matchedSkins, "desc"));
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
                <dialog 
                  open
                  onClick={(e) => {
                    if (e.target === e.currentTarget) {
                      setFinderStatus(null, null);
                    }
                  }}
                >
                    <div className='finder page-container'>
                      <SkinFilter />

                      <ul className='finder__item-list'>
                          {skinsInFinder.map((skin, index) => (
                              <SkinCard 
                                  key={index}
                                  skin={skin}
                                  skinName={skin.name}
                                  phase={skin.phase}
                                  skinImage={`/skin-images/${skin.image}`}
                                  rarity={skin.rarityColor || skin.rarity}
                              />
                          ))}
                      </ul>
                    </div>
                </dialog>
            )}
        </>
    );
}

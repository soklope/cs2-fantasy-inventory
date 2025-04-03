import './finder.scss'
import axios from "axios";
import React, { useState, useEffect } from 'react';
import SkinCard from '../SkinCard/SkinCard';
import useItemStore from '../../store/itemStore';

export default function Finder() {
    const { itemName, finderIsOpen, setFinderStatus} = useItemStore();
    const [skins, setSkins] = useState([]);

    useEffect(() => {
      const storedSkins = localStorage.getItem("cs2Skins");

      if (storedSkins) {
        const parsedData = JSON.parse(storedSkins);
        setSkins(parsedData.filter(item => item.weapon.name === itemName))
      } else {
        // const fetchSkins = async () => {
        //   try {
        //     const response = await axios.get("https://bymykel.github.io/CSGO-API/api/en/skins.json");
        //     const data = response.data;
        //     console.log(data);
            
            //     localStorage.setItem("cs2Skins", JSON.stringify(data));
        //   } catch (error) {
        //     console.error("Error fetching skins:", error);
        //   }
        // };
        
        // fetchSkins();
      }
    }, [itemName]);

    return (
        <>
            {finderIsOpen && (
                <dialog open>
                    <button onClick={setFinderStatus}>Close</button>
                    <ul className='finder-item-list'>
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
                </dialog>
            )}
        </>
    );
}

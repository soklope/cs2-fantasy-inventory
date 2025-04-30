import "./skinFilter.scss"
import FinderSearchBar from "../FinderSearchBar/FinderSearchBar";
import useSkinFilterStore from "../../store/skinFilterStore"
import useInventoryStore from '../../store/inventoryStore';
import sortByRarity from '../../helpers/sortFinder';
import { useEffect, useState } from "react";

export default function SkinFilter() {
    const skinsInFinder = useSkinFilterStore((state) => state.skinsInFinder);
    const setSkinsInFinder = useSkinFilterStore((state) => state.setSkinsInFinder);
    const skinsInFinderCopy = useSkinFilterStore((state) => state.skinsInFinderCopy);

    const { setFinderStatus, itemInFocus } = useInventoryStore();
    const [order, setOrder] = useState("desc");

    const [showRarityFilter, setShowRarityFilter] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [filteredByItem, setFilteredByItem] = useState("All")

    const isGlove = itemInFocus.category.toLowerCase() === "gloves";
    const isKnife = itemInFocus.category.toLowerCase() === "knives";

    const knifeTypes = [
        "Bayonet",
        "M9 Bayonet",
        "Bowie Knife",
        "Butterfly Knife",
        "Classic Knife",
        "Falchion Knife",
        "Flip Knife",
        "Gut Knife",
        "Huntsman Knife",
        "Karambit",
        "Kukri Knife",
        "Navaja Knife",
        "Nomad Knife",
        "Paracord Knife",
        "Shadow Daggers",
        "Skeleton Knife",
        "Stiletto Knife",
        "Survival Knife",
        "Talon Knife",
        "Ursus Knife"
    ];

    const gloveTypes = [
        "Bloodhound Gloves",
        "Broken Fang Gloves",
        "Driver Gloves",
        "Hand Wraps",
        "Hydra Gloves",
        "Moto Gloves",
        "Specialist Gloves",
        "Sport Gloves"
    ];

    const changeOrder = () => {
        if (order === "asc") {
            setSkinsInFinder(sortByRarity(skinsInFinder, "desc"));
            setOrder("desc");
        } else {
            setSkinsInFinder(sortByRarity(skinsInFinder, "asc"));
            setOrder("asc");
        }
    }
    
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen)
    }

    const filterByType = (itemType) => {
        const filteredSkins = skinsInFinderCopy.filter((skin) => skin.weapon?.toLowerCase() === itemType.toLowerCase());
        setSkinsInFinder(filteredSkins);
        setFilteredByItem(itemType)
        toggleDropdown()
    }

    useEffect(() => {
        if (isKnife || isGlove) {
            setShowRarityFilter(false);
            setFilteredByItem(itemInFocus.weaponType)
        } else {
            setShowRarityFilter(true);
        }
        
    }, [itemInFocus]);

    return (
        <div className='filter'>
            {showRarityFilter && (
                <button className='filter__sort-rarity' onClick={changeOrder}>
                    <span>{order}</span>
                </button>
            )}

            {!showRarityFilter && (
                <div>
                    <button className="filter__dropdown-button" onClick={() => toggleDropdown()}><span>{filteredByItem}</span></button>
                    {dropdownOpen && (
                        <ul className="filter__dropdown">
                            { isGlove ?
                                    gloveTypes.map((glove, index) => (
                                        <li className="filter__dropdown-item" key={index} onClick={() => filterByType(glove)}>{glove}</li>
                                    ))
                                : (
                                    knifeTypes.map((knife, index) => (
                                        <li className="filter__dropdown-item" key={index} onClick={() => filterByType(knife)}>{knife}</li>
                                    ))
                                )
                            }
                        </ul>
                    )}
                </div>
            )}

            <FinderSearchBar />
            
            <button className='button-cancel filter__close' onClick={() => setFinderStatus('', '', null)}></button>
        </div>
    );
}

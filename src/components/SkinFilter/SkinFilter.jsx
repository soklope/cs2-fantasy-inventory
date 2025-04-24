import "./skinFilter.scss"
import useSkinFilterStore from "../../store/skinFilterStore"
import useInventoryStore from '../../store/inventoryStore';
import sortByRarity from '../../helpers/sortFinder';
import { useEffect, useState } from "react";

export default function SkinFilter() {
    const skinsInFinder = useSkinFilterStore((state) => state.skinsInFinder);
    const setSkinsInFinder = useSkinFilterStore((state) => state.setSkinsInFinder);
    const skinsInFinderCopy = useSkinFilterStore((state) => state.skinsInFinderCopy);

    const { setFinderStatus, itemInFocus } = useInventoryStore();
    const [order, setOrder] = useState("asc");

    const [showRarityFilter, setShowRarityFilter] = useState(false);

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

    const filterByType = (itemType) => {
        const filteredSkins = skinsInFinderCopy.filter((skin) => skin.weapon?.name.toLowerCase() === itemType.toLowerCase());
        setSkinsInFinder(filteredSkins);
    }

    useEffect(() => {
        if (isKnife || isGlove) {
            setShowRarityFilter(false);
        } else {
            setShowRarityFilter(true);
        }
    }, [itemInFocus]);

    return (
        <div className='filter'>
            {showRarityFilter && (
                <button className='filter__sort-rarity' onClick={changeOrder}>
                    sort by rarity: <span>{order}</span>
                </button>
            )}

            {!showRarityFilter && (
                <div>
                    <button className="filter__dropdown">Show:</button>
                    <ul>
                        { isGlove ?
                                <div>
                                    {
                                        gloveTypes.map((glove, index) => (
                                            <button key={index} onClick={() => filterByType(glove)}>{glove}</button>
                                        ))
                                    }
                                </div>
                            : (
                                <div>
                                    {
                                        knifeTypes.map((knife, index) => (
                                            <button key={index} onClick={() => filterByType(knife)}>{knife}</button>
                                        ))
                                    }
                                </div>
                            )
                        }
                    </ul>
                </div>
            )}
            <button className='button-cancel' onClick={() => setFinderStatus('', '', null)}></button>
        </div>
    );
}

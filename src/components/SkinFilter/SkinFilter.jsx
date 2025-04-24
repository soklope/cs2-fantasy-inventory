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
    const [showKnifeFilter, setShowKnifeFilter] = useState(false);
    const [showGloveFilter, setShowGloveFilter] = useState(false);

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
        const isGlove = itemInFocus.category.toLowerCase() === "gloves";
        const isKnife = itemInFocus.category.toLowerCase() === "knives";

        if (isKnife) {
            setShowKnifeFilter(true);
            setShowGloveFilter(false);
            setShowRarityFilter(false);
        } else if (isGlove) {
            setShowGloveFilter(true);
            setShowKnifeFilter(false);
            setShowRarityFilter(false);
        } else {
            setShowRarityFilter(true);
            setShowKnifeFilter(false);
            setShowGloveFilter(false);
        }
    }, [itemInFocus]);

    return (
        <div className='finder__header'>
            {showRarityFilter && (
                <button className='finder__sort-button' onClick={changeOrder}>
                    sort by rarity: <span>{order}</span>
                </button>
            )}

            {showGloveFilter && (
                <div>
                    {
                        gloveTypes.map((glove, index) => (
                            <button onClick={() => filterByType(glove)} key={index}>{glove}</button>
                        ))
                    }
                </div>
            )}

            {showKnifeFilter && (
                <div>
                    {
                        knifeTypes.map((knife, index) => (
                            <button key={index} onClick={() => filterByType(knife)}>{knife}</button>
                        ))
                    }
                </div>
            )}

            <button className='button-cancel' onClick={() => setFinderStatus('', '', null)}></button>
        </div>
    );
}

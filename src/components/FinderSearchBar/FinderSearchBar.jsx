import { useEffect, useState } from "react";
import "./finderSearchBar.scss";
import useSkinFilterStore from "../../store/skinFilterStore";
import useInventoryStore from "../../store/inventoryStore";

export default function FinderSearchBar() {
    const { skinsInFinderCopy, setSkinsInFinder, skinsInFinder } = useSkinFilterStore();
    const { itemInFocus } = useInventoryStore()

    const [searchInput, setSearchInput] = useState("");
    const [knivesInFinderCopy, setKnivesInFinderCopy] = useState([])

    const isKnivesInFinder = itemInFocus.category === "Knives"

    useEffect(() => {
        if (!isKnivesInFinder) return; // Skip if not a knife

        const referenceWeaponType = skinsInFinder[0]?.weapon?.toLowerCase(); // This works as long as there is only one "type" of knife is rendered at once in the finder
        if (!referenceWeaponType) return;
    
        const knivesOfSameType = skinsInFinderCopy.filter(
            (knife) => knife.weapon?.toLowerCase() === referenceWeaponType
        );
    
        setKnivesInFinderCopy(knivesOfSameType);
    }, [skinsInFinder]);
    
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        const filteredSkins = skinsInFinderCopy.filter((skin) =>
            skin.name.toLowerCase().includes(value.toLowerCase())
        );
        
        const filteredKnives = knivesInFinderCopy.filter((skin) =>
            skin.name.toLowerCase().includes(value.toLowerCase())
        );

        if (isKnivesInFinder) {
            setSkinsInFinder(filteredKnives)            
        } else {
            setSkinsInFinder(filteredSkins);
        }
    };

    return (
        <div className="search-bar">
            <input
                className="search-bar__input"
                type="text"
                placeholder="Search..."
                value={searchInput}
                onChange={handleSearch}
            />
            <button className="search-bar__icon"></button>
        </div>
    );
}

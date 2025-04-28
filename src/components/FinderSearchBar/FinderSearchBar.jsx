import { useState } from "react";
import "./finderSearchBar.scss";
import useSkinFilterStore from "../../store/skinFilterStore";

export default function FinderSearchBar() {
    const { skinsInFinderCopy, setSkinsInFinder } = useSkinFilterStore();
    const [searchInput, setSearchInput] = useState("");

    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchInput(value);

        const filteredSkins = skinsInFinderCopy.filter((skin) =>
            skin.name.toLowerCase().includes(value.toLowerCase())
        );

        setSkinsInFinder(filteredSkins);
    };

    return (
        <div className="search-bar">
            <button className="button-search search-bar__icon"></button>
            <input
                className="search-bar__input"
                type="text"
                placeholder="Skin name..."
                value={searchInput}
                onChange={handleSearch}
            />
        </div>
    );
}

import { useState } from "react";
import "./wearPicker.scss";
import useInventoryStore from "../../store/inventoryStore"; // Import the store

export default function WearPicker({ possibleWears, activeWear, skinId }) {
    const [showWearOptions, setShowWearOptions] = useState(false);

    const { updateActiveWearInLoadout } = useInventoryStore(); // Get the function from the store

    const wearShortMap = {
        "Factory New": "FN",
        "Minimal Wear": "MW",
        "Field-Tested": "FT",
        "Well-Worn": "WW",
        "Battle-Scarred": "BS",
    };

    const toggleWearOptions = () => {
        setShowWearOptions(!showWearOptions);
    };

    const handleWearClick = (wearName) => {
        updateActiveWearInLoadout(skinId, wearName); // Call the new store function to update the active wear
        toggleWearOptions(); // Optionally close the wear options after clicking
    };

    return (
        possibleWears?.length > 0 && (
            showWearOptions ? (
                <div className="wear-picker__options">
                    {possibleWears.map((wear, __) => (
                        <button
                            className="wear-picker__option"
                            key={__}
                            onClick={() => handleWearClick(wear.name)} // Pass the wear name on click
                        >
                            {wearShortMap[wear.name] || wear.name}
                        </button>
                    ))}
                </div>
            ) : (
                <button
                    className="wear-picker"
                    onClick={() => toggleWearOptions()}
                >
                    {wearShortMap[activeWear] || activeWear} {/* Show the short name for active wear */}
                </button>
            )
        )
    );
}

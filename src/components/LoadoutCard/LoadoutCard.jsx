import useInventoryStore from "../../store/inventoryStore";
import WearPicker from "../WearPicker/WearPicker";

export default function LoadoutCard({ skin }) {
    const { setFinderStatus, currentFaction } = useInventoryStore();
    const isTerrorist = currentFaction === "terrorists";

    const handleCardClick = () => {
        setFinderStatus(skin.id, skin.name, skin.category, skin.weapon);
    };

    return (
        <li
            className={`card card--loadout ${isTerrorist ? "card--t" : "card--ct"}`}
            style={{
                background: `linear-gradient(to top, ${skin.rarityColor} -130%, #1D1D1D 50%)`,
            }}
        >
            <WearPicker
                possibleWears={skin.wears}
                activeWear={skin.wears?.find(wear => wear.active)?.name}
                skinId={skin.id} // Pass the skin ID here
            />
            <div className="card__inner" onClick={handleCardClick}>
                <h3 className="card__title">
                    {skin.name} {skin.phase && skin.phase}
                </h3>
                <img
                    className="card__image"
                    src={`/skin-images/${skin.image}`}
                    alt={`${skin.name} skin`}
                />
            </div>
        </li>
    );
}

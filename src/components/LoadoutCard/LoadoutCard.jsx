import useInventoryStore from "../../store/inventoryStore";

export default function LoadoutCard({ skin }) {
    const { setFinderStatus, currentFaction } = useInventoryStore();
    const isTerrorist = currentFaction === "terrorists"

    const handleCardClick = () => {
        setFinderStatus(skin.id, skin.name, skin.category, skin.weapon);
    }

    return (
        <li className={`card card--loadout ${isTerrorist ? "card--t" : "card--ct"}`} onClick={handleCardClick}>
            <div className='card__inner'>
                <h3 className="card__title">{skin.name} {skin.phase && (skin.phase)}</h3>
                <img className="card__image" src={`/skin-images/${skin.image}`} alt={`${skin.name} skin`}/>
            </div>
            { skin.rarityColor && (
                <div className='card__rarity' style={{ background: `linear-gradient(to top, ${skin.rarityColor}, transparent)` }} />
            )}
        </li>
    )
}

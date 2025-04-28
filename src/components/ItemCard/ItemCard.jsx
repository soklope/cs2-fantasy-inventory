import useInventoryStore from "../../store/inventoryStore";

export default function ItemCard({ weaponName, itemName, skinImage, rarity, weaponCategory }) {
    const { setFinderStatus, currentFaction } = useInventoryStore();

    const isTerrorist = currentFaction === "terrorists"

    const handleCardClick = () => {
        setFinderStatus(weaponName, weaponCategory);
    }

    return (
        <li className={`card card--loadout ${isTerrorist ? "card--t" : "card--ct"}`} onClick={handleCardClick}>
            <div className='card__inner'>
                <h3 className="card__title">{itemName}</h3>
                <img className="card__image" src={skinImage} alt={`${itemName} skin`}/>
            </div>
            { rarity && (
                <div className='card__rarity' style={{ background: `linear-gradient(to top, ${rarity}, transparent)` }} />
            )}
        </li>
    )
}

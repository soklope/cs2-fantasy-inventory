import useInventoryStore from "../../store/inventoryStore";

export default function ItemCard({ weaponName, itemName, skinImage, rarity, weaponCategory }) {
    const { setFinderStatus, currentFaction } = useInventoryStore();

    const isTerrorist = currentFaction === "terrorists"

    const handleCardClick = () => {
        setFinderStatus(weaponName, weaponCategory);
    }

    return (
        <li className={`card ${isTerrorist ? "card--t" : "card--ct"}`} onClick={handleCardClick}>
            <div className='card__inner'>
                <div className="card__title-image-wrapper">
                    <h3 className="card__title">{itemName}</h3>
                    <img src={skinImage} alt={`${itemName} skin`}/>
                </div>
            </div>
            <div className='card__rarity' style={{ background: `linear-gradient(to top, ${rarity}, transparent)` }} />
        </li>
    )
}

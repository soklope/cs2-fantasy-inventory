import useInventoryStore from "../../store/inventoryStore";

export default function ItemCard({ weaponName, itemName, skinImage, rarity, weaponCategory }) {
    const { setFinderStatus } = useInventoryStore();

    const handleCardClick = () => {
        setFinderStatus(weaponName, weaponCategory);
    }

    return (
        <li className="card" onClick={handleCardClick}>
            <div className='card__inner'>
                <h3>{itemName}</h3>
                <img src={skinImage} alt={`${itemName} skin`} />
            </div>
            <div className='card__rarity' style={{ background: `linear-gradient(to top, ${rarity}, transparent)` }} />
        </li>
    )
}

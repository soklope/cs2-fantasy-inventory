// ItemCard Component
import './itemCard.scss'
import useInventoryStore from "../../store/inventoryStore";

export default function ItemCard({ weaponName, itemName, skinImage, rarity, weaponCategory }) {
    const { setFinderStatus } = useInventoryStore();

    const handleCardClick = () => {
        setFinderStatus(weaponName, weaponCategory);
    }

    return (
        <li className="item-card" onClick={handleCardClick}>
            <h3>{itemName}</h3>
            <img src={skinImage} alt={`${itemName} skin`} />
            <div className='item-card__rarity' style={{ backgroundColor: rarity }} />
        </li>
    )
}

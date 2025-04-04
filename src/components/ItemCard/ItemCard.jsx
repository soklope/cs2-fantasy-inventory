import './itemCard.scss'
import useInventoryStore from "../../store/inventoryStore";

export default function ItemCard({ weaponName, itemName, skinImage, rarity }) {
    const { setFinderStatus} = useInventoryStore();

    return (
        <li className="item-card" onClick={() => setFinderStatus(weaponName)}>
            <h3>{itemName}</h3>
            <img src={skinImage} alt="skin image" />
            <div className='item-card__rarity' style={{ backgroundColor: rarity }} />
        </li>
    )
}
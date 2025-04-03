import './itemCard.scss'
import useItemStore from "../../store/itemStore";

export default function ItemCard({ weaponName, itemName, skinImage, rarity }) {
    const { setFinderStatus} = useItemStore();

    return (
        <li className="item-card">
            <h3>{itemName}</h3>
            <img src={skinImage} alt="skin image" />
            <button onClick={() => setFinderStatus(weaponName)}>Change Item</button>
            <div className='item-card__rarity' style={{ backgroundColor: rarity }} />
        </li>
    )
}
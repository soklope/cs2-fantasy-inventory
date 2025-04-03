import './skinCard.scss'
import useItemStore from "../../store/itemStore";

export default function SkinCard({ item, weaponName, skinName, skinImage, rarity }) {
    const { updateUserLoadoutStore } = useItemStore();

    const handleAddItemClick = () => {
        console.log("Clicked Item:", item); // Debugging
        updateUserLoadoutStore(item);  // Send full weapon object
    };

    return (
        <li className="skin-card" onClick={handleAddItemClick}>
            <h3>{weaponName}</h3>
            <h3>{skinName}</h3>
            <img src={skinImage} alt="skin image" />
            <div className='item-card__rarity' style={{ backgroundColor: rarity }} />
        </li>
    );
}

import './skinCard.scss'
import useInventoryStore from "../../store/inventoryStore";

export default function SkinCard({ item, weaponName, skinName, skinImage, rarity }) {
    const { updateUserLoadoutStore } = useInventoryStore();
  
    const handleAddItemClick = () => {
      updateUserLoadoutStore(item);
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
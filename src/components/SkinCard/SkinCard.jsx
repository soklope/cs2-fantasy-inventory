import useInventoryStore from "../../store/inventoryStore";

export default function SkinCard({ item, skinName, skinImage, rarity }) {
    const { updateUserLoadoutStore } = useInventoryStore();
  
    const handleAddItemClick = () => {
      updateUserLoadoutStore(item);
    };
  
    return (
      <li className="card" onClick={handleAddItemClick}>
        <div className='card__inner'>
          <h3>{skinName}</h3>
          <img src={skinImage} alt="skin image" />
        </div>
        <div className='card__rarity' style={{ background: `linear-gradient(to top, ${rarity}, transparent)` }} />
      </li>
    );
  }
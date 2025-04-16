import useInventoryStore from "../../store/inventoryStore";

export default function SkinCard({ skin, skinName, skinImage, rarity }) {
    const { updateUserLoadoutStore } = useInventoryStore();
  
    const handleAddItemClick = () => {
      updateUserLoadoutStore(skin);
    };
  
    return (
      <li className="card" onClick={handleAddItemClick}>
        <div className='card__inner'>
          <div className="card__title-image-wrapper">
            <h3 className="card__title">{skinName}</h3>
            <img src={skinImage} alt="skin image" />
          </div>
        </div>
        <div className='card__rarity' style={{ background: `linear-gradient(to top, ${rarity}, transparent)` }} />
      </li>
    );
  }
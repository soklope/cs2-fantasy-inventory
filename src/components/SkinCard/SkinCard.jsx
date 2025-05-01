import useInventoryStore from "../../store/inventoryStore";

export default function SkinCard({ skin, skinName, skinImage, rarity, phase }) {
    const { updateUserLoadoutStore, currentFaction } = useInventoryStore();
    const isTerrorist = currentFaction === "terrorists"
  
    const handleAddItemClick = () => {
      updateUserLoadoutStore(skin)
    };
  
    return (
      <li className={`card card--finder ${isTerrorist ? "card--t" : "card--ct"}`} onClick={handleAddItemClick}>
        <div className='card__inner'>
          <h3 className="card__title">{skinName} {phase && (phase)}</h3>
          <img className="card__image" src={skinImage} alt="skin image" />
        </div>
        <div className='card__rarity' style={{ background: `linear-gradient(to top, ${rarity}, transparent)` }} />
      </li>
    );
  }
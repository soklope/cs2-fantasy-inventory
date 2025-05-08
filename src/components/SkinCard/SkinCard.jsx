import useInventoryStore from "../../store/inventoryStore";

export default function SkinCard({ skin }) {
    const { updateUserLoadoutStore, currentFaction, setFinderStatusWithSwap, weaponSwapMode, toggleWeaponSwapMode, setSwapableItem, itemInFocus} = useInventoryStore();
    const isTerrorist = currentFaction === "terrorists"

    const handleAddItemClick = () => {
      if (weaponSwapMode) {
        toggleWeaponSwapMode(false)
        setSwapableItem(itemInFocus)
        setFinderStatusWithSwap(skin.id, skin.name, skin.category, skin.weapon)
      } else {
        updateUserLoadoutStore(skin)
      }
    };
  
    return (
      <li className={`card card--finder ${isTerrorist ? "card--t" : "card--ct"}`} onClick={handleAddItemClick} style={{ background: `linear-gradient(to top, ${skin.rarityColor} -130%, #1D1D1D 50%`}}>
        <div className='card__inner card__inner--finder'>
          <h3 className="card__title">{skin.name} {skin.phase && (skin.phase)}</h3>
          <img className="card__image" src={`/skin-images/${skin.image}`} alt="skin image" />
        </div>
      </li>
    );
  }
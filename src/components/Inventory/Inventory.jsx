// Inventory Component
import "./inventory.scss";
import ItemCard from "../ItemCard/ItemCard";
import useInventoryStore from "../../store/inventoryStore";

export default function Inventory() {
  const { userCtLoadoutStore, userTLoadoutStore, currentFaction } = useInventoryStore();

  const renderWeaponsByCategory = (category) => {
    const selectedLoadout = currentFaction === "ct" ? userCtLoadoutStore : userTLoadoutStore;
    
    return selectedLoadout.loadout
      .filter(item => item.category.name.toLowerCase() === category)
      .map(item => (
        <ItemCard
          key={item.id}
          weapon={item.value}
          itemName={item.name}
          weaponName={item.weapon.name}
          skinImage={item.image}
          rarity={item.rarity.color}
          weaponCategory={item.category.name}
        />
      ));
  };

  return (
    <div className="inventory">
      <div className="inventory__container page-container">
        <h2>Knives and Gloves</h2>
        <div className="inventory__weapon-category">
          {renderWeaponsByCategory("knives")}
          {renderWeaponsByCategory("agents")}
          {renderWeaponsByCategory("gloves")}
        </div>
      </div>

      <div className="inventory-container page-container">
        <h2>Rifles</h2>
        <div className="inventory__weapon-category">
          {renderWeaponsByCategory("rifles")}
        </div>
      </div>

      <div className="inventory-container page-container">
        <h2>Pistols</h2>
        <div className="inventory__weapon-category">
          {renderWeaponsByCategory("pistols")}
        </div>
      </div>
    </div>
  );
}

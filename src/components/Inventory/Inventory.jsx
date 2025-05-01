import "./inventory.scss";
import ItemCard from "../ItemCard/ItemCard";
import Toolbar from "../Toolbar/Toolbar";
import Agent from "../Agent/Agent";
import LoadoutName from "../LoadoutName/LoadoutName";
import useInventoryStore from "../../store/inventoryStore";

export default function Inventory() {
  const { userCtLoadoutStore, userTLoadoutStore, currentFaction } = useInventoryStore();
  const selectedLoadout = currentFaction === "counter-terrorists" ? userCtLoadoutStore : userTLoadoutStore;
  const isTerrorist = currentFaction === "terrorists";

  const renderSection = (categories) => {
    const items = selectedLoadout.loadout.filter(item =>
      categories.includes(item.category.toLowerCase())
    );

    if (items.length === 0) return null;

    return (
      <div className={`inventory__weapon-category ${isTerrorist ? "inventory__weapon-category--terrorist" : ""}`}>
        {items
          .map(item => (
            <ItemCard
              key={item.id}
              weaponId={item.id}
              weapon={item?.value}
              itemName={item?.name}
              weaponName={item.weapon || item.name}
              weaponType={item.weapon}
              skinImage={`/skin-images/${item.image}`}
              rarity={item?.rarityColor}
              weaponCategory={item?.category}
            />
        ))}
      </div>
    );
  };

  return (
    <div className={`inventory ${isTerrorist ? "inventory--t-theme" : "inventory--ct-theme"}`}>
      <Toolbar />
      <div className="inventory__inner page-container">
        <LoadoutName 
          loadoutName={selectedLoadout.name}
        />
        {renderSection(["knives", "gloves", "agent"])}
        {renderSection(["rifles"])}
        {renderSection(["smgs", "heavy"])}
        {renderSection(["pistols"])}
      </div>
      <Agent />
    </div>
  );
}

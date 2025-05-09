import "./inventory.scss";
import LoadoutCard from "../LoadoutCard/LoadoutCard";
import Agent from "../Agent/Agent";
import LoadoutName from "../LoadoutName/LoadoutName";
import useInventoryStore from "../../store/inventoryStore";
import TotalLoadoutPrice from "../TotalLoadoutPrice/TotalLoadoutPrice";

export default function Inventory() {
  const { userCtLoadoutStore, userTLoadoutStore, currentFaction } = useInventoryStore();
  const selectedLoadout = currentFaction === "counter-terrorists" ? userCtLoadoutStore : userTLoadoutStore;
  const isTerrorist = currentFaction === "terrorists";

  const renderSection = (categoryTitle, categories) => {
    const items = selectedLoadout.loadout.filter(item =>
      categories.includes(item.category.toLowerCase())
    );

    if (items.length === 0) return null;

    return (
      <div className="inventory__weapon-category-container">
        <h2 className="inventory__weapon-category-title">{categoryTitle}</h2>
        <div className={`inventory__weapon-category ${isTerrorist ? "inventory__weapon-category--terrorist" : ""}`}>
          {items
            .map(item => (
              <LoadoutCard
                skin={item}
                key={item.id}
              />
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className={`inventory ${isTerrorist ? "inventory--t-theme" : "inventory--ct-theme"}`}>
      <div className="page-container inventory__header">
        <LoadoutName 
          loadoutName={selectedLoadout.name}
        />
        <TotalLoadoutPrice />
      </div>
      <div className="inventory__inner page-container">
        {renderSection("Equipment", ["knives", "gloves", "agent"])}
        {renderSection("Rifles", ["rifles"])}
        {renderSection("Mid-Tier", ["smgs", "heavy"])}
        {renderSection("Pistols", ["pistols"])}
      </div>
      {/* <Agent /> */}
    </div>
  );
}

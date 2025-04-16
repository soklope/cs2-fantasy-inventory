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

  const renderSection = (title, categories) => {
    const items = selectedLoadout.loadout.filter(item =>
      categories.includes(item.category.name.toLowerCase())
    );

    if (items.length === 0) return null;

    return (
      <div className={`inventory__category ${isTerrorist ? "inventory__category--terrorist" : ""}`}>
        {/* <h2 className={`inventory__category-title ${isTerrorist ? "inventory__category-title--t-theme" : "inventory__category-title--ct-theme"}`}>{title}</h2> */}
        <div className={`inventory__weapon-category ${isTerrorist ? "inventory__weapon-category--terrorist" : ""}`}>
            {items.map(item => (
                <ItemCard
                  key={item.id}
                  weapon={item?.value}
                  itemName={item?.name}
                  weaponName={item.weapon?.name || item.name}
                  skinImage={item?.image}
                  rarity={item?.rarity?.color}
                  weaponCategory={item?.category?.name}
                />
            ))}
        </div>
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
        {renderSection("Agent, Knives and Gloves", ["knives", "gloves", "agent"])}
        {renderSection("Rifles", ["rifles"])}
        {renderSection("Pistols", ["pistols"])}
        <Agent />
      </div>
    </div>
  );
}

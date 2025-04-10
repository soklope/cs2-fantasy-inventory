import "./inventory.scss";
import ItemCard from "../ItemCard/ItemCard";
import Agent from "../Agent/Agent";
import useInventoryStore from "../../store/inventoryStore";

export default function Inventory() {
  const { userCtLoadoutStore, userTLoadoutStore, currentFaction } = useInventoryStore();
  const selectedLoadout = currentFaction === "counter-terrorists" ? userCtLoadoutStore : userTLoadoutStore;

  return (
    <div className="inventory page-container">
      <div className="inventory__container">
        <h2>Knives and Gloves</h2>
        <div className="inventory__weapon-category">
          {selectedLoadout.loadout
            .filter(item => item.category.name.toLowerCase() === "knives")
            .map(item => (
              <ItemCard
                key={item.id}
                weapon={item?.value}
                itemName={item?.name}
                weaponName={item.weapon?.name}
                skinImage={item?.image}
                rarity={item?.rarity.color}
                weaponCategory={item?.category.name}
              />
            ))}
          {selectedLoadout.loadout
            .filter(item => item.category.name.toLowerCase() === "gloves")
            .map(item => (
              <ItemCard
              key={item.id}
              weapon={item?.value}
              itemName={item?.name}
              weaponName={item.weapon?.name}
              skinImage={item?.image}
              rarity={item?.rarity.color}
              weaponCategory={item?.category.name}
              />
            ))}
            {selectedLoadout.loadout
              .filter(item => item.category.name.toLowerCase() === "agent")
              .map(item => (
                <ItemCard
                  key={item.id}
                  weapon={item?.value}
                  itemName={item?.name}
                  weaponName={item.name}
                  skinImage={item?.image}
                  rarity={item?.rarity}
                  weaponCategory={item?.category.name}
                />
              ))}
        </div>
      </div>

      <div className="inventory__container">
        <h2>Rifles</h2>
        <div className="inventory__weapon-category">
          {selectedLoadout.loadout
            .filter(item => item.category.name.toLowerCase() === "rifles")
            .map(item => (
              <ItemCard
                key={item.id}
                weapon={item?.value}
                itemName={item?.name}
                weaponName={item.weapon?.name}
                skinImage={item?.image}
                rarity={item?.rarity.color}
                weaponCategory={item?.category.name}
              />
            ))}
        </div>
      </div>

      <div className="inventory__container">
        <h2>Pistols</h2>
        <div className="inventory__weapon-category">
          {selectedLoadout.loadout
            .filter(item => item.category.name.toLowerCase() === "pistols")
            .map(item => (
              <ItemCard
                key={item.id}
                weapon={item?.value}
                itemName={item?.name}
                weaponName={item.weapon?.name}
                skinImage={item?.image}
                rarity={item?.rarity.color}
                weaponCategory={item?.category.name}
              />
            ))}
        </div>
      </div>

      <Agent />
    </div>
  );
}
import useInventoryStore from "../../store/inventoryStore";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

export default function SkinCard({ skin }) {
    const { updateUserLoadoutStore, currentFaction, setFinderStatusWithSwap, weaponSwapMode, toggleWeaponSwapMode, setSwapableItem, itemInFocus} = useInventoryStore();
    const isTerrorist = currentFaction === "terrorists"
    const [skinPrice, setSkinPrice] = useState(0)
    const [firstPossibleWear, setFirstPossibleWear] = useState("")

    const queryClient = useQueryClient();
    const skinPrices = queryClient.getQueryData(["skinPrices"]);

    useEffect(() => {
      if (!skinPrices || !skin?.name) return;

      const isAgentOrKnifeWithoutWears =
        skin.category === "agent" ||
        (skin.category === "Knives" && (!Array.isArray(skin.wears) || skin.wears.length === 0));
    
      const firstWearName = Array.isArray(skin.wears) && skin.wears.length > 0
        ? skin.wears[0].name
        : "";
      
      setFirstPossibleWear(firstWearName)

      const skinName = isAgentOrKnifeWithoutWears
        ? skin.name
        : `${skin.name} (${firstWearName})`;
      
      const matchedEntry = Object.entries(skinPrices ?? {}).find(
        ([name]) => name === skinName
      );
    

      if (matchedEntry) {
          const [, priceData] = matchedEntry;

          const price =
              priceData?.steam?.last_24h ??
              priceData?.steam?.last_7d ??
              priceData?.steam?.last_30d ??
              priceData?.steam?.last_90d ??
              priceData?.steam?.last_ever ??
              0;

          setSkinPrice(price.toFixed(2))
      } else {
          console.log(`No price found for: "${skin.name}"`);
      }
  }, [skinPrices, skin]);

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
      <li className={`card card--finder ${isTerrorist ? "card--t" : "card--ct"}`} onClick={handleAddItemClick} 
        style={{ background: `linear-gradient(to top, ${skin.rarityColor} -130%, #1D1D1D 50%`}}
      >
        <div className='card__inner card__inner--finder'>
          <h3 className="card__title">{skin.name} {skin.phase && (skin.phase)} ({firstPossibleWear})</h3>
          <img className="card__image" src={`/skin-images/${skin.image}`} alt="skin image" />
          <p className="card__price">{skinPrice}</p>
        </div>
      </li>
    );
  }
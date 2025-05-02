import "./swapWeaponButton.scss"
import useInventoryStore from '../../store/inventoryStore';
import useSkinFilterStore from "../../store/skinFilterStore";
import defaultCtLoadout from "../../assets/loadouts/default-ct-loadout";
import defaultTLoadout from "../../assets/loadouts/default-t-loadout";
import { useEffect, useState } from "react";

export default function SwapWeaponButton() {
    const { itemInFocus, currentFaction, userCtLoadoutStore, userTLoadoutStore } = useInventoryStore();
    const { setSkinsInFinder, skinsInFinder } = useSkinFilterStore()
    const isTerrorist = currentFaction === "terrorists"

    const [swapableWeapons, setSwapableWeapons] = useState([])
    const [isASwapableItem, SetIsASwapableItem] = useState(false)

    useEffect(() => {
        if (!itemInFocus) return;

        if (
            itemInFocus.category.toLowerCase() !== "agent" &&
            itemInFocus.category.toLowerCase() !== "gloves" &&
            itemInFocus.category.toLowerCase() !== "knives"
          ) {
            SetIsASwapableItem(true);
          } 

        const swapWeaponCategory = itemInFocus.category;
        const defaultLoadout = isTerrorist ? defaultTLoadout.loadout : defaultCtLoadout.loadout;
        const currentLoadout = isTerrorist ? userTLoadoutStore.loadout : userCtLoadoutStore.loadout;
        const currentWeapons = currentLoadout.map(item => item.weapon);
      
        const availableWeapons = defaultLoadout.filter(
          item =>
            item.category === swapWeaponCategory &&
            !currentWeapons.includes(item.weapon)
        );
      
        setSwapableWeapons(availableWeapons);
    }, [itemInFocus]);
    
    const showSwapableWeapons = () => {
        setSkinsInFinder(swapableWeapons)
    }

    return (
        isASwapableItem && (
            <button className="swap-weapon-button" onClick={() => showSwapableWeapons()}>
                Swap Weapon
            </button>
        )
    )
}
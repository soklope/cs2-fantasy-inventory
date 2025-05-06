import "./swapWeaponButton.scss"
import useInventoryStore from '../../store/inventoryStore';
import useSkinFilterStore from "../../store/skinFilterStore";
import defaultCtLoadout from "../../assets/loadouts/default-ct-loadout";
import defaultTLoadout from "../../assets/loadouts/default-t-loadout";
import { useEffect, useState } from "react";

export default function SwapWeaponButton() {
    const { itemInFocus, currentFaction, userCtLoadoutStore, userTLoadoutStore, toggleWeaponSwapMode} = useInventoryStore();
    const { setSkinsInFinder } = useSkinFilterStore()
    const isTerrorist = currentFaction === "terrorists"

    const [swapableWeapons, setSwapableWeapons] = useState([])
    const [isASwapableItem, SetIsASwapableItem] = useState(false)
    const nonSwapableCategories = ["agent", "gloves", "knives"];
    const itemInFocusIsSwapable = !nonSwapableCategories.includes(itemInFocus.category.toLowerCase())

    useEffect(() => {
        if (!itemInFocus) return;
    
        if (itemInFocusIsSwapable) {
            SetIsASwapableItem(true);
        } 
    
        const swapWeaponCategory = itemInFocus.category;
        const defaultLoadout = isTerrorist ? defaultTLoadout.loadout : defaultCtLoadout.loadout;
        const currentLoadout = isTerrorist ? userTLoadoutStore.loadout : userCtLoadoutStore.loadout;
        const currentWeapons = currentLoadout.map(item => item.weapon);
    
        let categoriesToInclude = [swapWeaponCategory];
    
        // If category is "SMGs" or "Heavy", include both
        if (swapWeaponCategory === "SMGs" || swapWeaponCategory === "Heavy") {
            categoriesToInclude = ["SMGs", "Heavy"];
        }
    
        const availableWeapons = defaultLoadout.filter(
            item =>
                categoriesToInclude.includes(item.category) &&
                !currentWeapons.includes(item.weapon)
        );
    
        setSwapableWeapons(availableWeapons);
    }, [itemInFocus]);
    
    const showSwapableWeapons = () => {
        setSkinsInFinder(swapableWeapons)
        toggleWeaponSwapMode(true)
    }

    return (
        isASwapableItem && (
            <button className="swap-weapon-button" onClick={() => showSwapableWeapons()}>
                Swap Weapon
            </button>
        )
    )
}
import "./loadoutName.scss"
import useInventoryStore from "../../store/inventoryStore"

export default function LoadoutName({loadoutName}) {
    const { currentFaction } = useInventoryStore()
    const isTerrorist = currentFaction === "terrorists"
    
    return (
        <h1 className={`loadout-name ${isTerrorist ? "loadout-name--t" : ""}`}>{loadoutName}</h1>
    )
}
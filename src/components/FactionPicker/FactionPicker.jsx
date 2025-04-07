import "./factionPicker.scss"
import useInventoryStore from "../../store/inventoryStore"

export default function FactionPicker() {
    const { setFaction, currentFaction } = useInventoryStore()

    return (
        <div className="faction-picker">
            <button 
                className={`faction-picker__icon faction-picker__icon--ct ${currentFaction === "ct" && "faction-picker__icon--active"}`} 
                onClick={() => setFaction("ct")}>
            </button>

            <button 
                className={`faction-picker__icon faction-picker__icon--t ${currentFaction === "t" && "faction-picker__icon--active"}`} 
                onClick={() => setFaction("t")}>
            </button>
        </div>
    )
}
import "./factionPicker.scss"
import useInventoryStore from "../../store/inventoryStore"

export default function FactionPicker() {
    const { setFaction, currentFaction } = useInventoryStore()

    return (
        <div className="faction-picker">
            <button 
                className={`faction-picker__icon faction-picker__icon--ct ${currentFaction === "counter-terrorists" && "faction-picker__icon--active"}`} 
                onClick={() => setFaction("counter-terrorists")}>
            </button>

            <button 
                className={`faction-picker__icon faction-picker__icon--t ${currentFaction === "terrorists" && "faction-picker__icon--active"}`} 
                onClick={() => setFaction("terrorists")}>
            </button>
        </div>
    )
}
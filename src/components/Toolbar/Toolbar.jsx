import "./toolbar.scss"
import FactionPicker from "../FactionPicker/FactionPicker"
import useInventoryStore from "../../store/inventoryStore";
import useOverwriteStore from "../../store/overwriteStore";

import { toast } from 'react-toastify';
import LZString from 'lz-string'; // Import the LZString library

export default function Toolbar() {
    const { userCtLoadoutStore, userTLoadoutStore, importInventory, currentFaction } = useInventoryStore();
    const { setShowConfirm, importStringValue, handleImportStringChange, setActionType } = useOverwriteStore()

    const copyInventoryCode = () => {
        const selectedLoadout = currentFaction === "counter-terrorists" ? userCtLoadoutStore : userTLoadoutStore;

        try {
            const json = JSON.stringify(selectedLoadout);
            const compressedBase64 = LZString.compressToBase64(json); // Compress to Base64

            navigator.clipboard.writeText(compressedBase64)
                .then(() => toast("Inventory copied to clipboard (compressed)"))
                .catch((err) => alert("Failed to copy: " + err));
        } catch (err) {
            console.error("Encoding error:", err);
            alert("Failed to encode inventory.");
        }
    };

    return (
        <div className="toolbar page-container">
            <div className="toolbar__import-export-reset">
                <input
                    type="text"
                    value={importStringValue}
                    onChange={handleImportStringChange}
                    placeholder="Compressed Inventory Code..."
                />

                <button className="button-primary" onClick={() => {setShowConfirm(true); setActionType("import")}}>Import</button>
                <button className="button-secondary" onClick={copyInventoryCode}>Export</button>
            </div>

            <FactionPicker />
        </div>
    )
}
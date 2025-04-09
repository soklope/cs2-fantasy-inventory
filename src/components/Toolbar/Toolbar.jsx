import "./toolbar.scss"
import FactionPicker from "../FactionPicker/FactionPicker"
import useInventoryStore from "../../store/inventoryStore";
import { useState } from "react";
import { toast } from 'react-toastify';
import LZString from 'lz-string'; // Import the LZString library

export default function Toolbar() {
    const { userCtLoadoutStore, userTLoadoutStore, importInventory, currentFaction } = useInventoryStore();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const copyInventoryCode = () => {
        const selectedLoadout = currentFaction === "ct" ? userCtLoadoutStore : userTLoadoutStore;

        try {
            const json = JSON.stringify(selectedLoadout);
            const compressedBase64 = LZString.compressToBase64(json); // Compress to Base64
            console.log(compressedBase64);

            navigator.clipboard.writeText(compressedBase64)
                .then(() => toast("Inventory copied to clipboard (compressed)"))
                .catch((err) => alert("Failed to copy: " + err));
        } catch (err) {
            console.error("Encoding error:", err);
            alert("Failed to encode inventory.");
        }
    };

    const handleImportInventory = () => {
        try {
            const decompressedJson = LZString.decompressFromBase64(inputValue);

            if (decompressedJson === null) {
                toast.error("Invalid inventory code");
                return;
            }

            const decoded = JSON.parse(decompressedJson);

            if (decoded && decoded.loadout && Array.isArray(decoded.loadout)) {
                importInventory(decoded);
                toast("Inventory imported successfully (decompressed)");
                setInputValue("");
            } else {
                throw new Error("Invalid inventory structure");
            }

        } catch (err) {
            console.error("Decode error:", err);
            toast.error("Invalid inventory code");
        }
    };


    return (
        <div className="toolbar page-container">
            <div className="toolbar__import-export-reset">
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Compressed Inventory Code..."
                />

                <button className="button-primary" onClick={handleImportInventory}>Import</button>
                <button className="button-secondary" onClick={copyInventoryCode}>Export</button>
            </div>

            <FactionPicker />
        </div>
    )
}
import "./toolbar.scss"
import FactionPicker from "../FactionPicker/FactionPicker"
import useInventoryStore from "../../store/inventoryStore";
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export default function Toolbar() {
    const { userCtLoadoutStore, userTLoadoutStore, importInventory, resetInventory, currentFaction } = useInventoryStore();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const copyInventoryCode = () => {
        const selectedLoadout = currentFaction === "ct" ? userCtLoadoutStore : userTLoadoutStore;

        try {
          const json = JSON.stringify(selectedLoadout);
          
          const encoder = new TextEncoder();
          const uint8Array = encoder.encode(json);
          const base64 = btoa(String.fromCharCode(...uint8Array));
          console.log(base64);
      
          navigator.clipboard.writeText(base64)
            .then(() => toast("Inventory copied to clipboard"))
            .catch((err) => alert("Failed to copy: " + err));
        } catch (err) {
          console.error("Encoding error:", err);
          alert("Failed to encode inventory.");
        }
      };
    
      const handleImportInventory = () => {
        try {
          const binary = atob(inputValue);
          const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
          const decoder = new TextDecoder();
          const decoded = JSON.parse(decoder.decode(bytes));
      
          if (decoded && decoded.loadout && Array.isArray(decoded.loadout)) {
            importInventory(decoded);
            toast("Inventory imported successfully");
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
                    placeholder="Inventory Code..."
                />

                <button onClick={handleImportInventory}>Import Inventory</button>
                <button onClick={copyInventoryCode}>Export Inventory</button>
                <button onClick={resetInventory}>Reset Inventory</button>
            </div>

            <FactionPicker />
        </div>
    )
}
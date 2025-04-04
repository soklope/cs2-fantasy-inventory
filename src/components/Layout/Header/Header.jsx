import "./header.scss"
import logo from "../../../assets/images/logo.png"
import useInventoryStore from "../../../store/inventoryStore"
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import defaultLoadout from "../../../assets/items/default-loadout.json";
import axios from "axios";

export default function Header() {
    const { userLoadoutStore, importInventory, resetInventory } = useInventoryStore();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const copyInventoryCode = () => {
        try {
          const json = JSON.stringify(userLoadoutStore);
          const encoder = new TextEncoder();
          const uint8Array = encoder.encode(json);
          const base64 = btoa(String.fromCharCode(...uint8Array));
      
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
      
          importInventory(decoded);
          toast("Inventory imported successfully");
        } catch (err) {
          console.error("Decode error:", err);
          toast.error("Invalid inventory code");
        }
      };

    useEffect(() => {
        const cs2SkinsLocalStorage = localStorage.getItem("cs2Skins");

        if (!cs2SkinsLocalStorage) {
            const fetchSkins = async () => {
            try {
                const response = await axios.get("https://bymykel.github.io/CSGO-API/api/en/skins.json");
                const data = response.data;
                localStorage.setItem("cs2Skins", JSON.stringify(data));
            } catch (error) {
                console.error("Error fetching skins:", error);
            }
            };
            
            fetchSkins();
        }

        if (!localStorage.getItem("userLoadout")) {
            localStorage.setItem("userLoadout", JSON.stringify(defaultLoadout));
        }
    }, []);
    
    return (
        <header className="header">
            <div className="header__inner page-container">
                <img src={logo} alt="" />
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
        </header>
    )
}
import "./header.scss"
import logo from "../../../assets/images/logo.png"
import useInventoryStore from "../../../store/inventoryStore"
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';
import defaultLoadout from "../../../assets/items/default-loadout.json";
import axios from "axios";

export default function Header() {
    const { userLoadoutStore, importInventory } = useInventoryStore();
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
    };

    const copyInventoryCode = () => {
        const json = JSON.stringify(userLoadoutStore); 
        const base64 = btoa(json); 
    
        navigator.clipboard.writeText(base64)
            .then(() => toast("Inventory copied to clipboard"))
            .catch((err) => alert('Failed to copy: ' + err));
    };
    
    const handleImportInventory = () => {
        try {
            const decoded = JSON.parse(atob(inputValue));
            importInventory(decoded);
            toast("Inventory imported successfully");
        } catch (err) {
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
            </div>
        </header>
    )
}
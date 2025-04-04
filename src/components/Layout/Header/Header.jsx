import "./header.scss"
import logo from "../../../assets/images/logo.png"
import useInventoryStore from "../../../store/inventoryStore"
import { useEffect, useState } from "react";
import { toast } from 'react-toastify';

export default function Header() {
    const { userLoadoutStore, importInventory } = useInventoryStore();
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        console.log(userLoadoutStore);
    }, [userLoadoutStore])

    const handleChange = (e) => {
        setInputValue(e.target.value);
        console.log(inputValue);
    };

    const copyInventoryCode = () => {
        const json = JSON.stringify(userLoadoutStore); // no need for pretty print or double stringify
        const base64 = btoa(json); // encode the raw JSON
    
        navigator.clipboard.writeText(base64)
            .then(() => toast("Inventory copied to clipboard"))
            .catch((err) => alert('Failed to copy: ' + err));
    };
    
    const handleImportInventory = () => {
        try {
            const decoded = JSON.parse(atob(inputValue)); // decode Base64 then parse JSON
            importInventory(decoded); // import to store
            toast("Inventory imported successfully");
        } catch (err) {
            toast.error("Invalid inventory code");
        }
    };
    

    return (
        <header className="header">
            <div className="header__inner page-container">
                <img src={logo} alt="" />
                <input
                    type="text"
                    value={inputValue}
                    onChange={handleChange}
                    placeholder="Type something..."
                />

                <button onClick={handleImportInventory}>Import Inventory</button>
                <button onClick={copyInventoryCode}>Export Inventory</button>
            </div>
        </header>
    )
}
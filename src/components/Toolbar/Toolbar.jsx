import "./toolbar.scss"
import FactionPicker from "../FactionPicker/FactionPicker"
import useInventoryStore from "../../store/inventoryStore";
import useOverwriteStore from "../../store/overwriteStore";
import ResetLoadoutButton from "../ResetLoadoutButton/ResetLoadoutButton";

import { toast } from 'react-toastify';
import LZString from 'lz-string';
import { useState } from "react";

export default function Toolbar() {
    const { userCtLoadoutStore, userTLoadoutStore, currentFaction } = useInventoryStore();
    const { setShowConfirm, importStringValue, handleImportStringChange, setActionType } = useOverwriteStore()
    const [showImportInput, setShowImportInput] = useState(false)

    const copyInventoryCode = () => {
        const selectedLoadout = currentFaction === "counter-terrorists" ? userCtLoadoutStore : userTLoadoutStore;

        try {
            const json = JSON.stringify(selectedLoadout);
            const compressedBase64 = LZString.compressToBase64(json);

            navigator.clipboard.writeText(compressedBase64)
                .then(() => toast("Inventory copied to clipboard (compressed)"))
                .catch((err) => alert("Failed to copy: " + err));
        } catch (err) {
            console.error("Encoding error:", err);
            alert("Failed to encode inventory.");
        }
    };

    const handleShowImport = () => {
        setShowImportInput(!showImportInput)
    }

    return (
        <div className="toolbar page-container">
            <FactionPicker 
                faction={"ct"}
            />

            <div className="toolbar__buttons">
                {
                    showImportInput ? (
                        <>
                            <button className="toolbar__cancel-import" onClick={() => handleShowImport()}></button>
                            <input
                                type="text"
                                value={importStringValue}
                                onChange={handleImportStringChange}
                                placeholder="Loadout Code..."
                            />
                            <button className="toolbar__accept-import" onClick={() => {setShowConfirm(true); setActionType("import"); handleShowImport()}}></button>
                        </>

                    ) : (
                        <>
                            <button className="toolbar__export" onClick={copyInventoryCode}></button>
                            <button className="toolbar__import" onClick={() => handleShowImport()}></button>
                            <div className="toolbar__spacer"></div>
                            <ResetLoadoutButton />
                        </>
                    )
                }

            </div>

            <FactionPicker 
                faction={"t"}
            />
        </div>
    )
}
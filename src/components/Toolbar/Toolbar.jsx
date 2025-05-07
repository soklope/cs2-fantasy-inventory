import "./toolbar.scss"
import FactionPicker from "../FactionPicker/FactionPicker"
import useInventoryStore from "../../store/inventoryStore";
import useOverwriteStore from "../../store/overwriteStore";
import ResetLoadoutButton from "../ResetLoadoutButton/ResetLoadoutButton";
import RenameButton from "../RenameButton/RenameButton";

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
                .then(() => toast(`${currentFaction} loadout copied`))
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
                            <button className="button-cancel" onClick={() => handleShowImport()}></button>
                            <input
                                type="text"
                                value={importStringValue}
                                onChange={handleImportStringChange}
                                placeholder="export-string..."
                            />
                            <button className="button-accept" onClick={() => {setShowConfirm(true); setActionType("import"); handleShowImport()}}></button>
                        </>

                    ) : (
                        <>
                            <RenameButton />
                            <button className="button-export" onClick={copyInventoryCode}></button>
                            <button className="button-import" onClick={() => handleShowImport()}></button>
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
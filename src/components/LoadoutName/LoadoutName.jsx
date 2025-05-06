import "./loadoutName.scss";
import useInventoryStore from "../../store/inventoryStore";
import useRenameStore from "../../store/renameStore";
import { useEffect, useState, useRef } from "react";

export default function LoadoutName({ loadoutName }) {
    const { showRenameInput, toggleRenameInput } = useRenameStore();
    const { currentFaction, userCtLoadoutStore, userTLoadoutStore, updateLoadoutName } = useInventoryStore();
    const isTerrorist = currentFaction === "terrorists";

    const [newName, setNewName] = useState("");
    const inputRef = useRef(null);

    useEffect(() => {
        isTerrorist ? setNewName(userTLoadoutStore.name) : setNewName(userCtLoadoutStore.name);
    }, [currentFaction]);

    useEffect(() => {
        if (showRenameInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showRenameInput]);

    const handleAccept = (e) => {
        e.preventDefault();
        updateLoadoutName(newName);
        toggleRenameInput();
    };

    const cancelRename = () => {
        isTerrorist ? setNewName(userTLoadoutStore.name) : setNewName(userCtLoadoutStore.name);
        toggleRenameInput();
    }

    return showRenameInput ? (
        <form className="page-container loadout-name" onSubmit={handleAccept}>
            <input
                ref={inputRef}
                className={`loadout-name__rename-input ${isTerrorist ? "loadout-name__rename-input--t" : ""}`}
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
            />
            <div className="loadout-name__rename-input-buttons">
                <button
                    type="button"
                    className="button-cancel"
                    onClick={() => cancelRename()}
                ></button>

                <button
                    type="submit"
                    className="button-accept"
                ></button>
            </div>
        </form>
    ) : (
        <h1 className={`page-container loadout-name ${isTerrorist ? "loadout-name--t" : ""}`}>{loadoutName}</h1>
    );
}
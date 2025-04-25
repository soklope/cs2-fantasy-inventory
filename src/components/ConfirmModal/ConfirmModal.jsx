import "./confirmModal.scss"
import useOverwriteStore from "../../store/overwriteStore";
import useInventoryStore from "../../store/inventoryStore";
import { toast } from 'react-toastify';
import LZString from 'lz-string'; // Import the LZString library

export default function ConfirmModal() {
    const { showConfirm, setShowConfirm, importStringValue, setImportStringValue, actionType } = useOverwriteStore()
    const { importInventory, resetInventory } = useInventoryStore();

    const handleImportInventory = () => {
        try {
            const decompressedJson = LZString.decompressFromBase64(importStringValue);

            if (decompressedJson === null) {
                toast.error("Invalid inventory code");
                return;
            }

            const decoded = JSON.parse(decompressedJson);

            if (decoded && decoded.loadout && Array.isArray(decoded.loadout)) {
                importInventory(decoded);
                toast("Inventory imported successfully");
                setImportStringValue("");
            } else {
                throw new Error("Invalid inventory structure");
            }

        } catch (err) {
            console.error("Decode error:", err);
            toast.error("Invalid inventory code");
        }
    };

    return (
        showConfirm && (
            <dialog>
                <div className="page-container confirm-modal">
                    { actionType === "reset" && (
                        <div className="confirm-modal__inner">
                            <h2>Are you sure?</h2>
                            <p>This will reset your loadout and cannot be undone.</p>
                            <div className="confirm-modal__buttons">
                                <button className="button-accept" onClick={() => { setShowConfirm(false); resetInventory();}}></button>
                                <button className="button-cancel" onClick={() => setShowConfirm(false)}></button>
                            </div>
                        </div>
                    )}

                    { actionType === "import" && (

                        <div className="confirm-modal__inner">
                            <h2>Are you sure?</h2>
                            <p>This will overwrite your current loadout and cannot be undone.</p>
                            <div className="confirm-modal__buttons">
                                <button className="button-accept" onClick={() => { setShowConfirm(false); handleImportInventory();}}></button>
                                <button className="button-cancel" onClick={() => setShowConfirm(false)}></button>
                            </div>
                    </div>
                    )}

                </div>
            </dialog>
        )
    )
}
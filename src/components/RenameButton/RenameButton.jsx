import { useEffect, useState } from "react"
import "./renameButton.scss"
import useInventoryStore from "../../store/inventoryStore"

export default function RenameButton() {
    const { currentFaction, userCtLoadoutStore, userTLoadoutStore, updateLoadoutName } = useInventoryStore()
    const [showRenameModal, setShowRenameModal] = useState(false)
    const isTerrorist = currentFaction === "terrorists"
    const [newName, setNewName] = useState("")

    useEffect(() => {
        isTerrorist ? setNewName(userTLoadoutStore.name) : setNewName(userCtLoadoutStore.name) 
    }, [currentFaction])

    const toggleRenameModal = () => {
        setShowRenameModal(!showRenameModal)
    }

    const handleAccept = () => {
        updateLoadoutName(newName)
        toggleRenameModal()
    }

    return (
        <>
            <button className="rename-button" onClick={toggleRenameModal}></button>
            {showRenameModal && (
                <dialog className="rename-modal">
                    <form
                        className="rename-modal__inner page-container"
                        onSubmit={(e) => {
                            e.preventDefault()
                            handleAccept()
                        }}
                    >
                    
                        <input
                            value={newName}
                            type="text"
                            onChange={(e) => setNewName(e.target.value)}
                        />
                        
                        <button
                            type="button"
                            className="button-cancel"
                            onClick={toggleRenameModal}
                        ></button>
                        
                        <button type="submit" className="button-accept"></button>
                    </form>
                </dialog>
            )}
        </>

    )
}
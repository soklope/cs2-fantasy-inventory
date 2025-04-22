import "./renameButton.scss"
import useRenameStore from "../../store/renameStore"

export default function RenameButton() {
    const { toggleRenameInput } = useRenameStore()

    return (
        <button className="rename-button" onClick={toggleRenameInput}></button>
    )
}
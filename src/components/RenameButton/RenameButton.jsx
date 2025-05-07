import "./renameButton.scss"
import useRenameStore from "../../store/renameStore"

export default function RenameButton() {
    const { toggleRenameInput } = useRenameStore()

    return (
        <button className="button-rename" onClick={toggleRenameInput}></button>
    )
}
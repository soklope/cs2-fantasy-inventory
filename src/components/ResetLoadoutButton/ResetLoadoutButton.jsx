import "./resetLoadoutButton.scss"
import useOverwriteStore from "../../store/overwriteStore";

export default function ResetLoadoutButton() {
    const { setActionType, setShowConfirm } = useOverwriteStore()

    return (
        <button
            className="button-trash"
            onClick={() => {
                setShowConfirm(true)
                setActionType("reset");
            }}
            >
        </button>
    )
}
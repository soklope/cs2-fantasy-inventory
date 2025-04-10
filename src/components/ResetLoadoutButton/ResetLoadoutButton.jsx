import "./resetLoadoutButton.scss"
import useOverwriteStore from "../../store/overwriteStore";

export default function ResetLoadoutButton() {
    const { setActionType, setShowConfirm } = useOverwriteStore()

    return (
        <div className='reset-loadout-button page-container'>
            <button
                className="button-danger"
                onClick={() => {
                    setShowConfirm(true)
                    setActionType("reset");
                }}
                >
                Reset Inventory
            </button>
      </div>
    )
}
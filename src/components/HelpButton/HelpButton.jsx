import { useEffect, useState } from "react"
import "./helpButton.scss"

export default function HelpButton() {
    const [helpIsOpen, setHelpIsOpen] = useState(false)
    
    const toggleHelpDialog = () => {
        setHelpIsOpen(!helpIsOpen)
    }

    useEffect(() => {
        const userHasBeenGreeted = localStorage.getItem("userHasBeenGreeted")

        if(!userHasBeenGreeted) {
            setHelpIsOpen(true)
            localStorage.setItem("userHasBeenGreeted", true)
        }
    }, [])
     
    return (
        <>
            <button className="help-button" onClick={() => toggleHelpDialog()}></button>

            {
                helpIsOpen && (
                    <dialog 
                        className="help-dialog" 
                        open
                        onClick={(e) => {
                            if (e.target === e.currentTarget) {
                                toggleHelpDialog();
                            }
                        }}
                    >
                        <div className="page-container help-dialog__inner">
                            <button className="button-cancel help-dialog__close-button" onClick={() => toggleHelpDialog()}></button>
                            <h3 className="help-dialog__title">Welcome to CSLoadout.online</h3>
                            <p className="help-dialog__text">CSLoadout is a hobby/passion project, made for you to create and share your "go-to" Counter-Strike 2 Loadout.</p>
                            <p className="help-dialog__text">The project is early stages, and feedback/ideas are very much welcome. Please use <span><a href="">this reddit post</a></span> to share your feedback and ideas</p>

                            <div className="help-dialog__icon-container">
                                <div className="help-dialog__icon">
                                    <button className="button-rename"></button>
                                    <p className="help-dialog__text">Edit the name of your loadout</p>
                                </div>

                                <div className="help-dialog__icon">
                                    <button className="button-export"></button>
                                    <p className="help-dialog__text">Export the current loadout shown (T or CT)</p>
                                </div>

                                <div className="help-dialog__icon">
                                    <button className="button-import"></button>
                                    <p className="help-dialog__text">Import a loadout via an export-string</p>
                                </div>

                                <div className="help-dialog__icon">
                                    <button className="button-trash"></button>
                                    <p className="help-dialog__text">Delete the current loadout shown (T or CT)</p>
                                </div>
                            </div>
                        </div>
                    </dialog>
                )
            }
        </>
    )
}
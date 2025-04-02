import './finder.scss'
import React, { useState } from 'react';

export default function Finder() {
    const [isOpen, setIsOpen] = useState(true); // State to track if the dialog is open or closed

    const closeDialog = () => {
        setIsOpen(false);
    };

    return (
        <>
            {isOpen && (
                <dialog open>
                    <button onClick={closeDialog}>Close</button>
                    <input type="text" placeholder='...'/>
                </dialog>
            )}
        </>
    );
}

import { useState } from "react";
import AutoPay from "./modules";

export default function AutoPayToggle() {
    const [enabled, setEnabled] = useState(true);
    const [showModal, setShowModal] = useState(false);

    const handleToggle = () => {
        if (enabled) {
            // trying to turn OFF
            setShowModal(true);
        } else {
            // turning ON directly
            setEnabled(true);
        }
    };

    const handleConfirmTurnOff = () => {
        setEnabled(false);
        setShowModal(false);
    };

    const handleClose = () => {
        setShowModal(false);
    };

    return (
        <>
            <label className="relative inline-flex cursor-pointer items-center mt-1">
                <input
                    type="checkbox"
                    checked={enabled}
                    onChange={handleToggle}
                    className="sr-only peer"
                />

                <div className="h-5 w-9 rounded-full bg-gray-200 transition-colors peer-checked:bg-lime-400" />

                <div className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition-transform peer-checked:translate-x-4" />
            </label>

            <AutoPay
                open={showModal}
                onClose={handleClose}
                onConfirm={handleConfirmTurnOff}
            />
        </>
    );
}
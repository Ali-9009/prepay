import { useState, useEffect } from "react";

const TypingInput = ({ handleCheck }) => {
    const [deviceInput, setDeviceInput] = useState("");
    const [placeholder, setPlaceholder] = useState("");

    useEffect(() => {
        const text = "Check Your Device Compatibility.....";
        let index = 0;

        const interval = setInterval(() => {
            setPlaceholder(text.slice(0, index + 1));
            index++;

            if (index === text.length) {
                index = 0; // restart (loop)
            }
        }, 100); // speed

        return () => clearInterval(interval);
    }, []);

    return (
        <input
            value={deviceInput}
            onChange={e => setDeviceInput(e.target.value)}
            onKeyDown={e => e.key === "Enter" && handleCheck()}
            placeholder={placeholder || ""}
            className="flex-1 border border-gray-300 rounded-[10px] px-3 py-2.25 text-[16px] text-gray-700 placeholder:text-gray-400 placeholder:text-sm outline-none min-w-0"
        />
    );
};

export default TypingInput;
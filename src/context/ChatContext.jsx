import { createContext, useContext, useState } from "react";

const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [template, setTemplate] = useState("");

    // OPEN CHAT WITH TEMPLATE
    const openChat = (message = "") => {
        setTemplate(message);
        setOpen(true);
    };

    // CLOSE CHAT
    const closeChat = () => {
        setOpen(false);
    };

    return (
        <ChatContext.Provider
            value={{
                open,
                setOpen,
                template,
                setTemplate,
                openChat,
                closeChat,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const useChat = () => useContext(ChatContext);
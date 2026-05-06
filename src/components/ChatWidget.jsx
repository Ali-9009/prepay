import { useState, useEffect, useRef } from "react";
import {
    MessageCircle,
    X,
    Send,
    Bot,
    User
} from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ChatWidget() {
    const [open, setOpen] = useState(false);
    const [messages, setMessages] = useState([
        { text: "Hi How can I help you?", sender: "bot" }
    ]);
    const [input, setInput] = useState("");

    const chatRef = useRef(null);
    const messagesEndRef = useRef(null);
    const location = useLocation(); // detect route change

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (chatRef.current && !chatRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [open]);

    // Close on page change
    useEffect(() => {
        setOpen(false);
    }, [location]);

    // Auto scroll to bottom
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    const getBotReply = (message) => {
        const msg = message.toLowerCase();

        if (msg.includes("hi") || msg.includes("hello")) {
            return "Hey How can I help you?";
        }
        if (msg.includes("price")) {
            return "Our plans start from $10.";
        }
        if (msg.includes("sim")) {
            return "We offer Physical SIM & eSIM.";
        }
        if (msg.includes("contact")) {
            return "Email us at support@example.com";
        }

        return "Sorry, I didn't understand that.";
    };

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMsg = { text: input, sender: "user" };
        const botMsg = { text: getBotReply(input), sender: "bot" };

        setMessages((prev) => [...prev, userMsg, botMsg]);
        setInput("");
    };

    return (
        <>
            {/* CHAT BOX */}
            {open && (
                <div
                    ref={chatRef}
                    className="fixed bottom-20 right-5 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden z-50 "
                >
                    {/* Header */}
                    <div className="bg-(--primary-color) text-white px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Bot size={18} />
                            <span className="font-medium">Support</span>
                        </div>
                        <button onClick={() => setOpen(false)}>
                            <X size={18} />
                        </button>
                    </div>

                    {/* Messages */}
                    <div className="h-64 p-3 overflow-y-auto text-sm space-y-3 bg-gray-50 scrollbar-thin scrollbar-thumb-gray-300">
                        {messages.map((msg, i) => (
                            <div
                                key={i}
                                className={`flex items-end gap-2 ${msg.sender === "user" ? "justify-end" : "justify-start"
                                    }`}
                            >
                                {msg.sender === "bot" && (
                                    <div className="bg-blue-100 p-1 rounded-full">
                                        <Bot size={14} />
                                    </div>
                                )}

                                <div
                                    className={`px-3 py-2 rounded-2xl max-w-[70%] ${msg.sender === "user"
                                            ? "bg-(--primary-color) text-white rounded-br-sm"
                                            : "bg-white border border-gray-300 rounded-bl-sm"
                                        }`}
                                >
                                    {msg.text}
                                </div>

                                {msg.sender === "user" && (
                                    <div className="bg-gray-200 p-1 rounded-full">
                                        <User size={14} />
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* Auto scroll anchor */}
                        <div ref={messagesEndRef} />
                    </div>

                    {/* Input */}
                    <div className="flex items-center border-t border-gray-300 px-2 py-2 bg-white">
                        <input
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Type a message..."
                            className="flex-1 px-2 py-1 outline-none text-sm"
                            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                        />
                        <button
                            onClick={sendMessage}
                            className="bg-(--primary-color) text-white p-2 rounded-full hover:scale-105 transition"
                        >
                            <Send size={16} />
                        </button>
                    </div>
                </div>
            )}

            {/* FLOATING BUTTON */}
            <button
                onClick={() => setOpen(!open)}
                className="fixed bottom-5 right-5 bg-(--primary-color) text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center z-50 hover:scale-110 transition"
            >
                <MessageCircle size={24} />
            </button>
        </>
    );
}
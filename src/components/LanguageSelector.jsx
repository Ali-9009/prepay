import { useState } from "react";
import { ChevronDown } from "lucide-react";

function LanguageSelector() {
    const [open, setOpen] = useState(false);
    const [lang, setLang] = useState("EN");

    const languages = [
        { code: "EN", label: "English", flag: "/images/us.png" },
        { code: "CN", label: "中文", flag: "/images/china.png" },
    ];

    const current = languages.find(l => l.code === lang);

    return (
        <div className="relative">
            {/* Trigger */}
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center gap-1 cursor-pointer bg-white p-1 shadow-md shadow-gray-200 border-2 border-red-600 rounded-full">
                <img src={current.flag} className="w-6 h-6 rounded-full" />
                <span className="text-xs"><ChevronDown size={18} /></span>
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute right-0 mt-2 w-32 bg-white rounded-xl shadow-lg overflow-hidden p-2 z-50">
                    {languages.map((item, i) => (
                        <div
                            key={i}
                            onClick={() => {
                                setLang(item.code);
                                setOpen(false);
                            }}
                            className={`rounded gap-2 flex items-center px-4 py-3 cursor-pointer text-sm
              ${lang === item.code
                                    ? "bg-red-100 text-black"
                                    : ""
                                }`}
                        >
                            <img src={item.flag} className="w-5 h-5 rounded-full" />
                            {item.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default LanguageSelector;
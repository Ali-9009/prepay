import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";

const countries = [
    { name: "Pakistan", code: "PK", dial: "+92" },
    { name: "United States", code: "US", dial: "+1" },
    { name: "United Kingdom", code: "GB", dial: "+44" },
    { name: "Canada", code: "CA", dial: "+1" },
    { name: "Australia", code: "AU", dial: "+61" },
    { name: "India", code: "IN", dial: "+91" },
];

export default function CountryDropdown() {
    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(countries[0]);
    const [search, setSearch] = useState("");

    const ref = useRef();

    // close on outside click
    useEffect(() => {
        const handleClick = (e) => {
            if (!ref.current?.contains(e.target)) setOpen(false);
        };
        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, []);

    const filtered = countries.filter(c =>
        c.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div ref={ref} className="relative w-full max-w-sm">

            {/* Selected */}
            <div
                onClick={() => setOpen(!open)}
                className="flex items-center px-3 mt-4 justify-between border border-gray-300 rounded-xl py-3 bg-white shadow-sm cursor-pointer"
            >
                <div className="flex items-center gap-3">
                    <img
                        src={`https://flagcdn.com/w40/${selected.code.toLowerCase()}.png`}
                        className="w-6 h-4 object-cover rounded-sm"
                    />
                    <span className="text-sm">{selected.name}</span>
                </div>

                <ChevronDown
                    size={18}
                    className={`transition ${open ? "rotate-180" : ""}`}
                />
            </div>

            {/* Dropdown */}
            {open && (
                <div className="absolute z-50 mt-2 w-full bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">

                    {/* Search */}
                    <div className="flex items-center px-3 py-2 border-b">
                        <Search size={16} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search country..."
                            className="w-full text-sm outline-none"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    {/* List */}
                    <div className="max-h-60 overflow-y-auto">
                        {filtered.map((c, i) => (
                            <div
                                key={i}
                                onClick={() => {
                                    setSelected(c);
                                    setOpen(false);
                                    setSearch("");
                                }}
                                className="flex items-center justify-between px-3 py-2 hover:bg-gray-100 cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={`https://flagcdn.com/w40/${c.code.toLowerCase()}.png`}
                                        className="w-6 h-4 object-cover rounded-sm"
                                    />
                                    <span className="text-sm">{c.name}</span>
                                </div>

                                <span className="text-xs text-gray-500">{c.dial}</span>
                            </div>
                        ))}

                        {filtered.length === 0 && (
                            <p className="text-center text-sm text-gray-400 py-3">
                                No country found
                            </p>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}
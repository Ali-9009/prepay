import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const countries = [
  {
    label: "United States",
    flag: "https://flagcdn.com/w40/us.png",
    value: "/TopUpMobile",
  },
  {
    label: "International",
    flag: "https://flagcdn.com/w40/un.png",
    value: "/InternationalTopUp",
  },
];

export default function CountrySelect() {
  const navigate = useNavigate();
  const location = useLocation();

  const [open, setOpen] = useState(false);

  const selected =
    countries.find((c) => c.value === location.pathname) || countries[0];

  const handleSelect = (country) => {
    setOpen(false);

    if (country.value !== location.pathname) {
      navigate(country.value);
    }
  };

  return (
    <div className="relative">
      {/* Selected Country */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="w-full flex items-center justify-between border border-gray-200 rounded-2xl px-5 py-4 bg-white shadow-sm hover:border-gray-300 transition"
      >
        <div className="flex items-center gap-3">
          <img
            src={selected.flag}
            alt={selected.label}
            className="w-7 h-7 rounded-full object-cover"
          />

          <span className="font-medium text-lg text-gray-800">
            {selected.label}
          </span>
        </div>

        <ChevronDown
          size={20}
          className={`text-gray-500 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute left-0 top-full mt-2 w-full bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden z-50">
          {countries.map((country) => (
            <button
              key={country.value}
              type="button"
              onClick={() => handleSelect(country)}
              className={`w-full flex items-center gap-3 px-5 py-4 text-left hover:bg-gray-50 transition ${
                country.value === location.pathname
                  ? "bg-red-50 text-red-500"
                  : ""
              }`}
            >
              <img
                src={country.flag}
                alt={country.label}
                className="w-7 h-7 rounded-full object-cover"
              />

              <span className="font-medium">{country.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
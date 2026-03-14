export default function Button({ text, onClick, type = "button", className = "" }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`px-6 py-2 text-sm rounded-full border border-[#BEBEBE]
             bg-(--black-color) text-white hover:bg-(--primary-color) hover:text-white
             transition-all duration-300 ${className}`}
        >
            {text}
        </button>
    );
}
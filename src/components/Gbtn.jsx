import { Link } from "react-router-dom";

export default function Button({
    text,
    onClick,
    to,
    type = "button",
    className = "",
    state, // add this
}) {

    const styles = `inline-block px-6 py-3 text-sm rounded-xl border border-[#BEBEBE]
  bg-(--black-color) text-white hover:bg-(--primary-color) hover:text-white
  transition-all duration-300 ${className}`;

    if (to) {
        return (
            <Link to={to} state={state} className={styles}>
                {text}
            </Link>
        );
    }

    return (
        <button type={type} onClick={onClick} className={styles}>
            {text}
        </button>
    );
}
import './FormButton.css';
function FormButton({
    children,
    className,
    disabled = false,
    onClick,
    type = "button",
    visual = "button",
}) {
    let buttonClass = "button";
    if (visual === "link") {
        buttonClass = "button-link";
    }
    if (type === "submit") {
        buttonClass = "button-submit";
    }
    return (
        <button
            aria-label="form button"
            className={`${buttonClass} ${className}`}
            disabled={disabled}
            type={type}
            onClick={onClick}
        > {children}
        </button>);
}


export default FormButton;
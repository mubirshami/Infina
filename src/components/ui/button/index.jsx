import React from "react";

const Button = ({ children, text, onClick, type = "button", disabled = false, className = "" }) => {
  const content = children ?? text;
  const baseClasses = [
    "inline-flex items-center justify-center rounded-2xl px-4 py-3 text-center font-medium transition-colors",
    disabled
      ? "cursor-not-allowed bg-[#dcdcdc] text-white"
      : "cursor-pointer bg-customBlue text-white hover:bg-[#0b356f]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
};

export default Button;

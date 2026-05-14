import React from "react";
const Button = ({ text, onClick }) => {
  return (
    <button
      className="bg-customBlue text-white text-center py-2 px-4 cursor-pointer m-1 border-1 font-extralight rounded-2xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;

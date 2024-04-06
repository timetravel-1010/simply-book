import React from "react";


const Button: React.FC<{
  text: string;
  customStyle: string;
  onClick: () => void;
}> = ({ text, customStyle, onClick }) => {

  return (
    <button
      className={`${customStyle} p-2 rounded w-32 px-2 md:text-base`}
      onClick={onClick}
    >
      <strong className="text-sm">
        {text}
      </strong>
    </button>
  );
}

export default Button;

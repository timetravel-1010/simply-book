import React from "react";


const Button: React.FC<{
  text: string;
  customStyle: string;
  onClick: () => void;
}> = ({ text, customStyle, onClick }) => {

  return (
    <button
      className={`p-2 rounded px-2 md:text-base ${customStyle}`}
      onClick={onClick}
    >
      <strong className="">
        {text}
      </strong>
    </button>
  );
}

export default Button;

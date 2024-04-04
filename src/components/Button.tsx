import React from "react";


const Button: React.FC<{
  text: string;
  bgColor: string;
  onClick: () => void;
}> = ({ text, bgColor, onClick }) => {

  return (
    <div className="flex justify-end my-2">
      <button
        className={`${bgColor} text-white p-2 rounded`}
        onClick={onClick}
      >
        <strong>
          {text}
        </strong>
      </button>
    </div >
  );
}

export default Button;

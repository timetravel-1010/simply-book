import React, { useState } from "react";
import grayCoffee from '../../assets/images/coffee.png';
import blueCoffee from '../../assets/images/coffee-blue.png';

const NavigationButton: React.FC<{
  text: string;
  isSelected: boolean;
  onClick: () => void;
}> = ({ text, isSelected, onClick }) => {
  return (
    <button
      className={`flex flex-col items-center  ${isSelected ? 'text-blue-500 border-b-4 border-blue-500' : 'text-gray-500'}`}
      onClick={onClick}
    >
      <img src={isSelected ? blueCoffee : grayCoffee} alt='coffee icon' className="w-8" />
      <span>{text}</span>
    </button>
  );
};


export const NavigationMenu: React.FC<{}> = () => {
  const [isSelected, setIsSelected] = useState<boolean>(true);

  return (
    <div className="bg-white flex pt-2 pb-0 justify-center w-full">
      <NavigationButton
        text="Reservar"
        isSelected={isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
      <div className="mx-4"></div>
      <NavigationButton
        text="Mis Turnos"
        isSelected={!isSelected}
        onClick={() => setIsSelected(!isSelected)}
      />
    </div>
  );
}

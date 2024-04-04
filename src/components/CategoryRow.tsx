import React, { useState } from "react";
import { Service } from "../types/Service";
import moreIcon from "../assets/images/more.png";
import lessIcon from "../assets/images/minus.png"
import ServiceRow from "./ServiceRow";


const CategoryRow: React.FC<{
  category: string;
  services: Service[];
}> = ({ category, services }) => {

  const [showServices, setShowServices] = useState<boolean>(false);

  return (
    <div className="my-4">
      <button
        className="bg-blue-100 p-1 w-full"
        onClick={() => { setShowServices(!showServices) }}
      >
        <div className="flex items-center justify-between p-2 mx-1">
          <span>
            {category}
          </span>
          <img
            src={showServices ? lessIcon : moreIcon}
            alt="more-icon"
            className="w-4"
          />
        </div>
      </button>
      {showServices && services.map(service => (
        <ServiceRow
          service={service}
          key={service.id}
        />
      ))}
    </div>
  );
}

export default CategoryRow;

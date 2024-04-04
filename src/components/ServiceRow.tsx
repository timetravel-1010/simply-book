import React, { useState } from "react";
import { Service } from "../types/Service";
import Button from "./Button";

const ServiceRow: React.FC<{
  service: Service;
}> = ({ service }) => {

  const [selected, setSelected] = useState<boolean>(false);

  return (
    <div className="border border-blue-400 p-2 my-6 flex flex-col">
      <div>
        <h4 className="mb-1">{service.name}</h4>
        <p>{service.description}</p>
      </div>

      <Button
        onClick={() => { setSelected(!selected) }}
        bgColor={selected ? 'bg-gray-600' : 'bg-gray-400'}
        text={selected ? 'Seleccionado' : 'Seleccionar'}
      />
    </div>
  );
}

export default ServiceRow;

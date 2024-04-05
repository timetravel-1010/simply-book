import React, { useState } from "react";
import { Service } from "../../../types/Service";
import Button from "../../shared/Button";

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

      <div className="flex justify-end py-1 mr-4">
        <Button
          onClick={() => { setSelected(!selected) }}
          text={selected ? 'Seleccionado' : 'Seleccionar'}
          customStyle={`${selected ? 'bg-gray-600' : 'bg-gray-400'} text-white`}
        />
      </div>
    </div>
  );
}

export default ServiceRow;

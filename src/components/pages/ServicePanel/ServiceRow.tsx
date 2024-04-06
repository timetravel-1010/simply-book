import React from "react";
import { useSelector } from "react-redux";
import { selectService } from '../../../redux/slices/serviceSlice';
import { Service } from "../../../types/Service";
import Button from "../../shared/Button";

const ServiceRow: React.FC<{
  service: Service;
  onSelect: (selectedService: Service) => void;
}> = ({ service, onSelect }) => {

  const selectedService = useSelector(selectService);

  return (
    <div className="border border-blue-400 p-2 my-6 flex flex-col">
      <div>
        <h4 className="mb-1">{service.name}</h4>
        <p>{service.description}</p>
      </div>

      <div className="flex justify-end py-1 mr-4">
        <Button
          onClick={() => { onSelect(service); }}
          text={selectedService.id === service.id ? 'Seleccionado' : 'Seleccionar'}
          customStyle={`${selectedService.id === service.id ? 'bg-gray-600' : 'bg-gray-400'} text-white`}
        />
      </div>
    </div>
  );
}

export default ServiceRow;

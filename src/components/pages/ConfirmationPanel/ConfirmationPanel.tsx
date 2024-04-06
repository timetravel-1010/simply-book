import React from "react";
import { useSelector } from "react-redux";
import { selectService } from "../../../redux/slices/serviceSlice";
import { selectShift } from "../../../redux/slices/shiftSlice";


export const ConfirmationPanel: React.FC<{
}> = () => {
  const service = useSelector(selectService);
  const date = useSelector(selectShift);

  return (
    <div className="border border-blue-400 p-4">
      <h2>
        Servicio: {service.name}
      </h2>
      <h2>
        Fecha: {date.date} {date.time}
      </h2>
    </div>
  );
}

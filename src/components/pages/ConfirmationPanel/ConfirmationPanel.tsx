import React from "react";


export const ConfirmationPanel: React.FC<{
  service: string;
  date: string;
}> = ({ service, date }) => {

  return (
    <div className="border border-blue-400 p-4">
      <h2>
        Servicio: {service}
      </h2>
      <h2>
        Fecha: {date}
      </h2>
    </div>
  );
}

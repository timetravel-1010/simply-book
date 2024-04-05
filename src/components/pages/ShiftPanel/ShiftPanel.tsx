import React from "react";
import { Shift } from "../../../types";
import { ShiftOptions } from "./ShiftOptions";

export const ShiftPanel: React.FC<{
  shifts: Shift[];
}> = ({ shifts }) => {

  return (
    <div className="border border-blue-400 px-6 py-8">
      <h2>
        <strong>
          Próximos turnos disponibles
        </strong>
      </h2>
      {shifts.map(shift => (
        <ShiftOptions key={shift.date} shift={shift} />
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectService } from "../../../redux/slices/serviceSlice";
import { getShiftsByServiceId } from "../../../services/shifts";
import { Shift } from "../../../types";
import { ShiftOptions } from "./ShiftOptions";

export const ShiftPanel: React.FC<{
}> = () => {
  const serviceId = useSelector(selectService).id;
  const [shifts, setShifts] = useState<Shift[]>([]);
  const [available, setAvailable] = useState<boolean>(false);

  const checkShift = (shift: Shift) => {
    if (shift.availableTimeslots.length === 0) {
      setAvailable(false);
      return;
    }
    setAvailable(true);
    setShifts([shift]);
  };

  useEffect(() => {
    const fetchShift = async () => {
      const shiftData = getShiftsByServiceId(serviceId);
      checkShift(shiftData);
    };

    fetchShift();
  }, [serviceId]);

  return (
    <div className="border border-blue-400 px-6 py-8">
      <h2>
        <strong>
          Próximos turnos disponibles
        </strong>
      </h2>
      {available ? (shifts.map(shift => (
        <ShiftOptions key={shift.date} shift={shift} />
      ))) : (
        <h2 className="my-8">
          No hay fechas disponibles para este servio
        </h2>
      )}
    </div>
  );
}

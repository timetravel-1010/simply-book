import React, { useState } from "react";
import { Shift } from "../../../types";
import { DateTime } from "luxon";
import { Button } from "../../shared";

export const ShiftOptions: React.FC<{
  shift: Shift;
}> = ({ shift }) => {

  const [selected, setSelected] = useState<string>("");

  const handlerSelected = (ts: string) => {
    if (ts === selected) { setSelected(""); return }
    setSelected(ts);
  };

  const dates = formatDate(shift.date);
  return (
    <div >
      <h2 className="my-4">
        <strong>
          {dates?.longFormat}
        </strong>
      </h2>
      <div className="flex justify-center w-full">
        <div
          className="grid grid-cols-2 gap-4 gap-x-6 w-max sm:grid-cols-2 md:grid-cols-4 items-center">
          {shift.availableTimeslots.map(ts => (
            <Button
              key={ts}
              text={ts}
              customStyle={`${selected === ts ? 'text-white' : 'text-gray-500'} ${selected === ts ? 'bg-gray-600' : 'bg-gray-300'}`}
              onClick={() => handlerSelected(ts)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}



function formatDate(dateString: string): { longFormat: string, shortFormat: string } | null {
  try {
    const parsedDate = DateTime.fromISO(dateString);

    //const long = parsedDate.setLocale('es-CO').toFormat("dd 'de' MMMM");
    const monthName = capitalizeFirstLetter(parsedDate.setLocale('es-CO').toFormat('MMMM'));
    const longFormat = `${parsedDate.toFormat('dd')} de ${monthName}`;

    // Format the date in "24/4/2024" format
    const shortFormat = parsedDate.toFormat('dd/L/yyyy');

    return { longFormat, shortFormat };
  } catch (error) {
    // Handle invalid date strings
    console.error(error);
    return null;
  }
}

function capitalizeFirstLetter(string: string): string {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

import React, { useState } from "react";
import { Shift } from "../../../types";
import { Button } from "../../shared";
import { useDispatch } from "react-redux";
import { setShift } from "../../../redux/slices/shiftSlice";
import { formatDate } from "../../../utils/format";


export const ShiftOptions: React.FC<{
  shift: Shift;
}> = ({ shift }) => {

  const [selected, setSelected] = useState<string>("");
  const dispatch = useDispatch();
  const date = formatDate(shift.date);

  const handlerSelected = (ts: string) => {
    if (ts === selected) {
      setSelected("");
      dispatch(setShift({
        date: '',
        time: ''
      }))
      return;
    }
    setSelected(ts);
    dispatch(setShift({
      date: date?.shortFormat || '',
      time: ts,
    }));
  };

  return (
    <div >
      <h2 className="my-4">
        <strong>
          {date?.longFormat}
        </strong>
      </h2>
      <div className="flex justify-center w-full">
        <div
          className="grid grid-cols-2 gap-4 gap-x-6 w-max sm:grid-cols-2 md:grid-cols-4 items-center">
          {shift.availableTimeslots.map(ts => (
            <Button
              key={ts}
              text={ts}
              customStyle={`${selected === ts ? 'text-white bg-gray-600' : 'text-gray-500 bg-gray-300'}`}
              onClick={() => handlerSelected(ts)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

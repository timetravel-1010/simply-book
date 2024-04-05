import { Shift } from "../types";

export const getShiftsByServiceId = (id: number): Shift => {
  if (id === 3) {
    return JSON.parse(jsonResponse);
  } else {
    return {};
  }
};

const jsonResponse: string = `{
  "date": "2024-04-26",
  "serviceId": 3,
  "availableTimeslots": [
    "09:00",
    "09:30",
    "10:00",
    "10:30",
    "11:00",
    "11:30",
    "12:00",
    "13:00",
    "13:30",
    "14:00",
    "14:30",
    "15:00",
    "15:30",
    "16:00",
    "16:30",
    "17:00"
  ]
}`;

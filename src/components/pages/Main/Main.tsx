import React from "react"
import { useSelector } from "react-redux";
import { selectCurrentStage } from "../../../redux/slices/stageSlice";
import { Shift } from "../../../types";
import { LoadingBar, NavigationMenu, NavigationPanel } from "../../layout";
import { ConfirmationPanel } from "../ConfirmationPanel";
import { ServicePanel } from "../ServicePanel";
import { ShiftPanel } from "../ShiftPanel";

const title: { [key: string]: string } = {
  'serviceSelection': 'Seleccionar Servicio',
  'shiftSelection': 'Seleccionar Horario',
  'confirmation': 'Confirmar Turno',
};

export const Main: React.FC<{}> = () => {
  const currentStage = useSelector(selectCurrentStage);
  const currentTitle = title[currentStage];

  let currentPanel: React.ReactNode;

  switch (currentStage) {
    case 'serviceSelection':
      currentPanel = <ServicePanel />;
      break;
    case 'shiftSelection':
      currentPanel = <ShiftPanel shifts={availableSlots} />;
      break;
    case 'confirmation':
      currentPanel = <ConfirmationPanel />;
      break;
    default:
      currentPanel = <p>Ha ocurrido un error</p>
  }

  return (
    <>
      <div className="m-8 flex flex-col mb-56">
        <h1 className='text-lg font-bold'>{currentTitle}</h1>
        <LoadingBar />
        <div className="mt-8"></div>
        <main className='w-full'>
          {currentPanel}
        </main >
      </div >

      <div className="flex flex-col fixed overflow-auto left-0 bottom-0 w-full z-10">
        <div className="flex justify-center">
          <NavigationPanel />
        </div>
        <div className="flex justify-center">
          <NavigationMenu />
        </div>
      </div >
    </>
  );
}



const availableSlots: Shift[] = [
  {
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
  }
]

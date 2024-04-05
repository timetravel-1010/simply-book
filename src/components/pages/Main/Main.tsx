import React, { useState } from "react"
import { Shift } from "../../../types";
import { LoadingBar, NavigationMenu, NavigationPanel } from "../../layout";
import { Button } from "../../shared";
import { ConfirmationPanel } from "../ConfirmationPanel";
import { ServicePanel } from "../ServicePanel";
import { ShiftPanel } from "../ShiftPanel";

export const Main: React.FC<{}> = () => {
  const [selectedService, setSelectedService] = useState<number | null>(1);

  const [currentStage, setCurrentStage] = useState<string>("Confirmar turno")//('Seleccionar horario');//("Seleccionar servicio");
  const [barProgress, setBarProgress] = useState<string>('85%'); // 25%, 65%, 85%;

  return (
    <>
      <div className="m-8 flex flex-col mb-56">
        <h1 className='text-lg font-bold'>{currentStage}</h1>
        <LoadingBar progress={barProgress} />
        <div className="mt-8"></div>
        <main className='w-full'>
          <ServicePanel />
          <ShiftPanel shifts={availableSlots} />
          <ConfirmationPanel
            service={"Esculpido (solo en 1 uña)"}
            date={"24/4/2024 10:30"}
          />
        </main >
      </div >

      <div className="flex flex-col fixed overflow-auto left-0 bottom-0 w-full z-10">
        <div className="flex justify-center">
          {selectedService
            &&
            <NavigationPanel
              leftButton={<Button
                text='Anterior'
                customStyle={"text-white bg-gray-600"}
                onClick={() => { }}
              />}
              rightButton={<Button
                text='Siguiente'
                customStyle={"text-white bg-gray-600"}
                onClick={() => { }}
              />}
            />}
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

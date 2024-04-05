import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectService } from "../../redux/slices/serviceSlice";
import { selectShift } from "../../redux/slices/shiftSlice";
import { moveToNextStage, moveToPreviousStage, selectCurrentStage } from "../../redux/slices/stageSlice";
import { Button } from "../shared";



export const NavigationPanel: React.FC<{
}> = () => {
  const [enable, setEnable] = useState<boolean>(true);
  const selectedService = useSelector(selectService);
  const selectedShift = useSelector(selectShift);
  const currentStage = useSelector(selectCurrentStage);
  const dispatch = useDispatch();

  let nextBtnText = 'Siguiente';
  console.log('stage:', currentStage);

  if (currentStage === 'confirmation')
    nextBtnText = 'Confirmar';

  return (
    <div className={`${selectedService.id !== -1 ? 'border' : ''} bg-white border-blue-400 border-r-0 px-8 py-4 w-full justify-between flex mt-10`}>
      {((currentStage !== 'serviceSelection')
        && (
          <Button
            text='Anterior'
            customStyle={`text-white bg-gray-600`}
            onClick={() => { dispatch(moveToPreviousStage()) }}
          />
        ) || <div></div>)}
      {selectedService.id !== -1 ? (
        <Button
          text={nextBtnText}
          customStyle={`text-white ${true ? 'bg-gray-600' : 'bg-gray-400'}`}
          onClick={() => { dispatch(moveToNextStage()) }}
        />
      ) : (<div className="w-full"></div>)}
    </div>
  );
}

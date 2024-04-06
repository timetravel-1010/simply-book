import { useSelector } from "react-redux";
import { selectService } from "../redux/slices/serviceSlice";
import { selectShift } from "../redux/slices/shiftSlice";
import { selectCurrentStage } from "../redux/slices/stageSlice";


export const useNextButton = (): { showRB: boolean, enabledRB: boolean, buttonTextRB: string } => {
  const currentStage: string = useSelector(selectCurrentStage);
  const selectedService = useSelector(selectService);
  const selectedShift = useSelector(selectShift);

  switch (currentStage) {
    case 'serviceSelection':
      if (selectedService.id !== -1) {
        return { showRB: true, enabledRB: true, buttonTextRB: 'Siguiente' };
      }
      break;
    case 'shiftSelection':
      if (selectedShift.time !== '') {
        return { showRB: true, enabledRB: true, buttonTextRB: 'Siguiente' };
      }
      return { showRB: true, enabledRB: false, buttonTextRB: 'Siguiente' };
    case 'confirmation':
      return { showRB: true, enabledRB: true, buttonTextRB: 'Confirmar' };
  }

  return { showRB: false, enabledRB: false, buttonTextRB: '' };
};

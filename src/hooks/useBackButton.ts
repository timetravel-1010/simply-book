import { useSelector } from "react-redux";
import { selectService } from "../redux/slices/serviceSlice";
import { selectCurrentStage } from "../redux/slices/stageSlice";
import { Service } from "../types";


export const useBackButton = (): { showLB: boolean, enabledLB: boolean, buttonTextLB: string } => {
    const currentStage: string = useSelector(selectCurrentStage);
    const selectedService: Service = useSelector(selectService);

    switch (currentStage) {
        case 'serviceSelection':
            if (selectedService.id !== -1) {
                return { showLB: false, enabledLB: false, buttonTextLB: '' };
            }
            break;
        case 'shiftSelection':
            return { showLB: true, enabledLB: true, buttonTextLB: 'Anterior' };
        case 'confirmation':
            return { showLB: true, enabledLB: true, buttonTextLB: 'Anterior' };
    }

    return { showLB: false, enabledLB: false, buttonTextLB: '' };
};

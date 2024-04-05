import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


export interface StageState {
  currentStage: string;
}

const initialStageState: StageState = {
  currentStage: 'serviceSelection',
}

export const stageSlice = createSlice({
  name: 'stage',
  initialState: initialStageState,
  reducers: {
    moveToNextStage: (state) => {
      switch (state.currentStage) {
        case 'serviceSelection':
          return {
            currentStage: 'shiftSelection',
          };
        case 'shiftSelection':
          return {
            currentStage: 'confirmation',
          };
        default:
          return state;
      }
    },
    moveToPreviousStage: (state) => {
      switch (state.currentStage) {
        case 'shiftSelection':
          return {
            currentStage: 'serviceSelection',
          };
        case 'confirmation':
          return {
            currentStage: 'shiftSelection',
          };
        default:
          return state;
      }
    }
  },
});

export const { moveToNextStage, moveToPreviousStage } = stageSlice.actions;
export const selectCurrentStage = (state: RootState) => { return state.stage.currentStage };
export default stageSlice.reducer;

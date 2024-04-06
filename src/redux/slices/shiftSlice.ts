import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { SelectedShift } from "../../types";
import { RootState } from "../store";


export interface ShiftState {
  shift: SelectedShift;
}

const initialShiftState: ShiftState = {
  shift: {
    date: "",
    time: "",
  },
}


export const shiftSlice = createSlice({
  name: 'shift',
  initialState: initialShiftState,
  reducers: {
    setShift: (state, action: PayloadAction<SelectedShift>) => {
      return {
        ...state,
        shift: action.payload,
      };
    }
  },
});

export const { setShift } = shiftSlice.actions;
export const selectShift = (state: RootState) => { return state.shift.shift };
export default shiftSlice.reducer;

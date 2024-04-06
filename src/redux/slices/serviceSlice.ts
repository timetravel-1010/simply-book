import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Service } from "../../types";
import { RootState } from "../store";

export interface ServiceState {
  service: Service;
}

const initialServiceState: ServiceState = {
  service: {
    id: -1,
    name: "",
    category: "",
    description: "",
  },
}

export const serviceSlice = createSlice({
  name: 'service',
  initialState: initialServiceState,
  reducers: {
    setService: (state, action: PayloadAction<Service>) => {
      return {
        ...state,
        service: action.payload,
      };
    }
  },
});


export const { setService } = serviceSlice.actions;
export const selectService = (state: RootState) => { return state.service.service };
export default serviceSlice.reducer;

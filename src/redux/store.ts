import { configureStore } from "@reduxjs/toolkit";
import serviceReducer from './slices/serviceSlice';
import shiftReducer from './slices/shiftSlice';
import stageReducer from './slices/stageSlice';


export const store = configureStore({
  reducer: {
    service: serviceReducer,
    shift: shiftReducer,
    stage: stageReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

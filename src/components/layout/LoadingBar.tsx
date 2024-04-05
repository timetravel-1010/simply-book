import React from "react";
import { useSelector } from "react-redux";
import { selectCurrentStage } from "../../redux/slices/stageSlice";

const progress: {
  [key: string]: string;
} = {
  'serviceSelection': '25%',
  'shiftSelection': '65%',
  'confirmation': '85%',
}

export const LoadingBar: React.FC<{
}> = () => {
  const currentStage = useSelector(selectCurrentStage);
  const percentage = progress[currentStage];

  return (
    <div className="w-full h-6 bg-gray-200 rounded-l dark:bg-gray-700" >
      <div className='h-6 bg-green-500' style={{ width: percentage }} ></div>
    </div >
  );
}

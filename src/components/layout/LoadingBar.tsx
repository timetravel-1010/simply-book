import React from "react";

export const LoadingBar: React.FC<{
  progress: string;
}> = ({ progress }) => {

  return (
    <div className="w-full h-6 bg-gray-200 rounded-l dark:bg-gray-700" >
      <div className='h-6 bg-green-500' style={{ width: progress }} ></div>
    </div >
  );

}

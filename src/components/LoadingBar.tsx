import React from "react";

const LoadingBar: React.FC = () => {

  return (
    <div className="w-full h-6 bg-gray-200 rounded-l dark:bg-gray-700" >
      <div className="h-6 bg-green-600 w-2/5 "></div>
    </div >
  );

}

export default LoadingBar;

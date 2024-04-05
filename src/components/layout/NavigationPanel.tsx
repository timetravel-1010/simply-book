import React from "react";

export const NavigationPanel: React.FC<{
  leftButton: React.ReactNode;
  rightButton: React.ReactNode
}> = ({ leftButton, rightButton }) => {

  return (
    <div className='border bg-white border-blue-400 border-r-0 px-8 py-4 w-full justify-between flex mt-10'>
      {leftButton}
      {rightButton}
    </div>
  );
}

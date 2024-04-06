import React from "react";
import { useDispatch } from "react-redux";
import { useBackButton } from "../../hooks/useBackButton";
import { useNextButton } from "../../hooks/useNextButton";
import { moveToNextStage, moveToPreviousStage } from "../../redux/slices/stageSlice";
import { Button } from "../shared";


export const NavigationPanel: React.FC<{
}> = () => {
  const dispatch = useDispatch();
  const { showRB, enabledRB, buttonTextRB } = useNextButton();
  const { showLB, enabledLB, buttonTextLB } = useBackButton();

  return (
    <div className={`flex ${showRB ? 'border' : ''} bg-white border-blue-400 border-r-0 px-8 py-2 h-full w-full justify-between`}>
      {showLB ? (
        <Button
          text={buttonTextLB}
          customStyle={`text-white ${enabledLB ? 'bg-gray-600' : 'bg-gray-400'} w-28`}
          onClick={() => { enabledLB && dispatch(moveToPreviousStage()) }}
        />
      ) : (<div></div>)}

      {showRB && (
        <Button
          text={buttonTextRB}
          customStyle={`text-white ${enabledRB ? 'bg-gray-600' : 'bg-gray-400'} w-28`}
          onClick={() => { enabledRB && dispatch(moveToNextStage()) }}
        />
      )}
    </div>
  );
}

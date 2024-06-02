import React, { useCallback } from "react";

interface ResetButtonProps {
  isStarted: boolean,
  setTimer: React.Dispatch<React.SetStateAction<number>>,
  setLaps: React.Dispatch<React.SetStateAction<string[]>>
}
const ResetButton = React.memo<ResetButtonProps>(({ isStarted, setTimer, setLaps }) => {
  const resetTimer = useCallback(() => {
    setTimer(0);
    setLaps([]);
  }, [setTimer]);
  return (
    <div className="stop-watch-button">
      <button
        className="reset-btn"
        disabled={isStarted ? true : false}
        onClick={resetTimer}
      >
        Reset ⏱️
      </button>
    </div>
  );
});

export default ResetButton;

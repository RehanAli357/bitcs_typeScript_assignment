import React from "react";
import { formattedTime } from "./FormatTimer";

interface StopWatchTimerProps {
  timer: number;
}

const StopWatchTimer: React.FC<StopWatchTimerProps> = ({ timer }) => {
  return (
    <div className="timer">
      <p>{formattedTime(timer)}</p>
    </div>
  );
};

export default React.memo(StopWatchTimer);

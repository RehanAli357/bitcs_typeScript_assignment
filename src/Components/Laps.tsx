import React from "react";

interface LapsProps {
  totalLaps:string[] 
}
const Laps = React.memo<LapsProps>(({ totalLaps }) => {
  return (
    <div className="timer-laps">
      <h3>Total Laps</h3>
      <ul>
        {totalLaps.length > 0 ? (
          totalLaps.map((data, index) => (
            <li key={index}>
             {data}
            </li>
          ))
        ) : (
          <p style={{textAlign:"center"}}>No Laps have been recorded yet</p>
        )}
      </ul>
    </div>
  );
});

export default Laps;

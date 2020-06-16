import React, { useState } from "react";

export default function Hooks() {
  const [timerActive, setTimerActive] = useState(false);

  return (
    <div>
      {timerActive}
      <button onClick={() => setTimerActive(!timerActive)}>submit</button>
    </div>
  );
}

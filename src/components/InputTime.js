import React, { useState, useEffect } from "react";

const InputTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    now.setHours(now.getHours() + 9); //우리나라 기준 시간
    const koreaTime = now.toISOString().substring(11, 16);
    setTime(koreaTime);
    localStorage.setItem("time", koreaTime);
  }, []);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    localStorage.setItem("time", event.target.value);
  };

  return (
    <div>
      지하철 탑승시간
      <input type="time" value={time} onChange={handleTimeChange} />
    </div>
  );
};
export default InputTime;

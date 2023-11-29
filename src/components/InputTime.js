import React, { useState, useEffect } from "react";
import styled from "styled-components";
const InputTime = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const now = new Date();
    now.setHours(now.getHours() + 9); //우리나라 기준 시간
    // const koreaTime = now.toISOString().substring(11, 16);
    const koreaTime = "09:42";
    setTime(koreaTime);
    localStorage.setItem("time", koreaTime);
  }, []);

  const handleTimeChange = (event) => {
    setTime(event.target.value);
    localStorage.setItem("time", event.target.value);
  };

  return (
    <div>
      <Input type="time" value={time} onChange={handleTimeChange} />
    </div>
  );
};
const Input = styled.input`
  width: 200px;
  border: 1px solid #c4c4c4;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 12px 13px;
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  &:focus {
    border: 1px solid #21d13f;
    box-sizing: border-box;
    border-radius: 10px;
    outline: 1px solid #42f560;
    border-radius: 10px;
  }
`;
export default InputTime;

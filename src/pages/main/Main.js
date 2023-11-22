import { useState } from "react";
import styled from "styled-components";
//이미지
import Line1Image from "../../assets/images/line1.png";
import Line2Image from "../../assets/images/line2.png";
import Line3Image from "../../assets/images/line3.png";
import Line4Image from "../../assets/images/line4.png";
import Line5Image from "../../assets/images/line5.png";
import Line6Image from "../../assets/images/line6.png";
import Line7Image from "../../assets/images/line7.png";
import Line8Image from "../../assets/images/line8.png";
import Line9Image from "../../assets/images/line9.png";

//components
import SideBar from "../../components/SideBar";
import InputStation from "../../components/InputStation";
const Main = () => {
  const [selectedLine, setSelectedLine] = useState("2호선");

  const lineImages = {
    "1호선": Line1Image,
    "2호선": Line2Image,
    "3호선": Line3Image,
    "4호선": Line4Image,
    "5호선": Line5Image,
    "6호선": Line6Image,
    "7호선": Line7Image,
    "8호선": Line8Image,
    "9호선": Line9Image,
  };

  const handleLineSelect = (line) => {
    setSelectedLine(line);
  };

  return (
    <MainContainer>
      <SideBar onLineSelect={handleLineSelect} />

      <h1>🚇 출근길에서 살아남기 🚇</h1>
      {selectedLine && (
        <img
          src={lineImages[selectedLine]}
          alt={selectedLine}
          width="400px"
          height="400px"
        />
      )}
      <InputContainer>
        <InputItem>
          지하철 탑승시간
          <input type="time" />
        </InputItem>
        <InputItem>
          <InputStation text="탑승역" title="start" />
        </InputItem>
        <InputItem>
          <InputStation text="도착역" title="end" />
        </InputItem>
      </InputContainer>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputItem = styled.div`
  display: flex;
  flex-direction: row;
`;
export default Main;

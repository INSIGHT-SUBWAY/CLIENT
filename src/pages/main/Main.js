import { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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
import InputTime from "../../components/InputTime";
import CustomBtn from "../../components/button/button";
const Main = () => {
  const navigate = useNavigate();
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

  // API 함수
  const sendToApi = async (data) => {
    // api 호출 하고
    // axios.post('/api/path', data)
    // 예를 들어 2초후에 응답이 왔다고 가정해보고
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ data: "API response data" });
      }, 2000);
    });
  };
  // API 호출 및 페이지 이동 처리
  const handleSubmit = async () => {
    // local 에 저장한 start, end, time 보내고
    const response = await sendToApi({
      start: localStorage.getItem("start"),
      end: localStorage.getItem("end"),
      time: localStorage.getItem("time"),
    });

    // 데이터 기다리는 동안 로더 페이지로 이동
    navigate("/loader");

    // 응답 대기 및 Analyze 페이지로 이동
    setTimeout(() => {
      navigate("/analyze", { state: { data: response.data } });
    }, 3000);
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
          <InputTime />
        </InputItem>
        <InputItem>
          탑승역
          <InputStation text="탑승역" title="start" />
        </InputItem>
        <InputItem>
          도착역
          <InputStation text="도착역" title="end" />
        </InputItem>
      </InputContainer>

      <CustomBtn onClick={handleSubmit} text="탐색하러 가기" />
    </MainContainer>
  );
};

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const InputItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  width: 350px;
`;

export default Main;

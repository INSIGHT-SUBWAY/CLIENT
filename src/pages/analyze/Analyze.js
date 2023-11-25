import React from "react";
import { useState, useEffect } from "react";
import Loader from "../loader/Loader";
import styled from "styled-components";
import {
  faFaceSmile,
  faFaceFrown,
  faFaceMeh,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import IconFace from "../../components/IconFace";
import CongestionList from "../../components/ConjestionList";
const Analyze = () => {
  const dummy = {
    SUBWAYEND: "성수",
    DISCOMFORT_LEVEL: 35.2,
    ARRIVETIME: "18:40:30",
    CONGESTION_LIST: [
      "44",
      "52",
      "38",
      "28",
      "31",
      "34",
      "31",
      "31",
      "33",
      "30",
    ],
  };

  const [subwayData, setSubwayData] = useState(dummy);

  // useEffect(() => {
  //   fetch("API_ENDPOINT")
  //     .then((response) => response.json())
  //     .then((data) => setSubwayData(data))
  //     .catch((error) => console.error("Error:", error));
  // }, []);

  if (!subwayData) return <Loader />;

  return (
    <AnalyzeContainer>
      <h1>출근길에서 살아남기</h1>
      <AnalyzeHeader>
        <div>지금 들어오는 {subwayData.SUBWAYEND} 행 열차</div>
        <FinalScore>
          <IconFace discomfortScore={subwayData.DISCOMFORT_LEVEL} />
          출근길 불쾌지수: {subwayData.DISCOMFORT_LEVEL}
        </FinalScore>
        <p>예상 도착 시간: {subwayData.ARRIVETIME}</p>
      </AnalyzeHeader>
      <CongestionList congestionList={subwayData.CONGESTION_LIST} />
    </AnalyzeContainer>
  );
};

const AnalyzeContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AnalyzeHeader = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const FinalScore = styled.div`
  display: flex;
  font-weight: 800;
  border: 1px;
`;
export default Analyze;

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
        <p>지금 들어오는 {subwayData.SUBWAYEND} 행 열차</p>
        <FinalScore>출근길 불쾌지수: {subwayData.DISCOMFORT_LEVEL}</FinalScore>
        <IconFace discomfortScore={subwayData.DISCOMFORT_LEVEL} />
        <p>예상 도착 시간: {subwayData.ARRIVETIME}</p>
      </AnalyzeHeader>
      <div>
        <h2>혼잡도:</h2>
        <ul>
          {subwayData.CONGESTION_LIST.map((level, index) => (
            <li key={index}>{level}</li>
          ))}
        </ul>
      </div>
    </AnalyzeContainer>
  );
};

const AnalyzeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AnalyzeHeader = styled.div`
  display: flex;
`;
const FinalScore = styled.div`
  font-weight: 800;
`;
export default Analyze;

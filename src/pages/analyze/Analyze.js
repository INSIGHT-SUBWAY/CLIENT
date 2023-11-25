import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

//pages
import Loader from "../loader/Loader";

//components
import IconFace from "../../components/IconFace";
import CongestionList from "../../components/ConjestionList";

const Analyze = () => {
  const dummy = {
    SUBWAYEND: "성수",
    DISCOMFORT_LEVEL: 55.2,
    ARRIVETIME: "18:40:30",
    CONGESTION_LIST: [
      "44",
      "52",
      "38",
      "28",
      "31",
      "34",
      "71",
      "31",
      "33",
      "30",
    ],
    CURRENT_MIN_CONGESTION_CAR: 9, // 탑승 최소 혼잡도 칸
    ROUTE_MIN_CONGESTION_CAR: 2, //경로중 최소평균혼잡도
    ROUTE_MINMIN_CONGESTION_CAR: 3, //경로중 최소혼잡도보유칸
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
      {/* <h1>출근길에서 살아남기</h1> */}
      <AnalyzeHeader>
        <div>지금 들어오는 {subwayData.SUBWAYEND} 행 열차</div>

        <FinalScore>
          <IconFace discomfortScore={subwayData.DISCOMFORT_LEVEL} />
          출근길 불쾌지수:{" "}
          <DiscomfortLevelText discomfortScore={subwayData.DISCOMFORT_LEVEL}>
            {subwayData.DISCOMFORT_LEVEL}
          </DiscomfortLevelText>{" "}
          점
        </FinalScore>
        <div>예상 도착 시간: {subwayData.ARRIVETIME}</div>
      </AnalyzeHeader>
      <AnalyzeItem>
        <CongestionList congestionList={subwayData.CONGESTION_LIST} />
        {/* <IconFace discomfortScore={subwayData.DISCOMFORT_LEVEL} /> */}
      </AnalyzeItem>
      <AnalyzeItem>
        <Subtitle>추천 탑승칸</Subtitle>
        {/* <InfoLists> */}
        <div>
          <CircleInfo>{subwayData.CURRENT_MIN_CONGESTION_CAR}</CircleInfo>
          <div>탑승최소혼잡도</div>
        </div>
        <div>
          <CircleInfo>{subwayData.ROUTE_MIN_CONGESTION_CAR}</CircleInfo>
          <div>경로최소혼잡도</div>
        </div>
        <div>
          <CircleInfo>{subwayData.ROUTE_MINMIN_CONGESTION_CAR}</CircleInfo>
          <div>경로중최소혼잡도</div>
        </div>
        {/* </InfoLists> */}
      </AnalyzeItem>
      <AnalyzeItem>
        <Subtitle>경로간 평균 혼잡도</Subtitle>
        {/* <div>경로간 평균 혼잡도</div> */}
        <CongestionList congestionList={subwayData.CONGESTION_LIST} />
      </AnalyzeItem>
    </AnalyzeContainer>
  );
};

const AnalyzeContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;
const AnalyzeHeader = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
`;
const FinalScore = styled.div`
  display: flex;
  justify-content: space-around;
  width: 350px;
  align-items: center;
  font-weight: 800;
  font-size: 1.4rem;
  /* --bg: #e8e8e8; */
  --contrast: #e2e0e0;
  --grey: #93a1a1;
  position: relative;
  padding: 20px;
  background-color: var(--bg);
  border-radius: 35px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`;

const DiscomfortLevelText = styled.span`
  color: ${(props) =>
    props.discomfortScore >= 70
      ? "var(--color-red)"
      : props.discomfortScore >= 40
      ? "var(--color-yellow)"
      : "var(--color-blue)"};
`;
const AnalyzeItem = styled.div`
  display: flex;
  flex-direction: row;
  width: 1000px;
  justify-content: space-around;
  align-items: center;
  /* height: 70px; */
`;

const InfoLists = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Subtitle = styled.span`
  border: none;
  display: flex;
  padding: 0.75rem 1.5rem;
  background-color: var(--color-gray);
  color: #ffffff;
  font-size: 0.75rem;
  line-height: 1rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  user-select: none;
  gap: 0.75rem;
  box-shadow: 0 4px 6px -1px var(--color-gray), 0 2px 4px -1px var(--color-gray);
`;
const CircleInfo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: var(--color-green);
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.5rem;
  box-shadow: 0 4px 6px -1px var(--color-green),
    0 2px 4px -1px var(--color-green);
`;
export default Analyze;

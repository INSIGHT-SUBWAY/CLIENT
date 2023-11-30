import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
//pages
import Loader from "../loader/Loader";

//components
import IconFace from "../../components/IconFace";
import CongestionList from "../../components/CongestionList";
import CustomBtn from "../../components/button/button";
import { useNavigate } from "react-router-dom";

const Analyze = () => {
  const navigate = useNavigate();
  // const BASE_URL = "https://api.sursubway.store";
  const BASE_URL = "http://127.0.0.1:8000";
  const start = localStorage.getItem("start").replace("역", "");
  const end = localStorage.getItem("end").replace("역", "");
  const [subwayData, setSubwayData] = useState(null);
  // 각 칸 예측 정보 보여주는 버튼 생성
  const [showPrediction, setShowPrediction] = useState(false);

  const handleButtonClick = () => {
    setShowPrediction(!showPrediction); // 현재 상태의 반대로 설정
  };

  const renderPrediction = () => {
    return subwayData.PREDICTION.PRED_CONGESTION.map((station, index) => {
      const stationName = Object.keys(station)[0];
      // 예측 결과로 나온 각 칸별 혼잡도 값 정수 형태로 보여주기 위해 반올림
      const roundedCongestionList = station[stationName].map((value) =>
        Math.round(value)
      );

      return (
        <PredictionLists key={index}>
          <Subtitle2>{stationName}</Subtitle2>
          <CongestionList congestionList={roundedCongestionList} />
        </PredictionLists>
      );
    });
  };

  // 더미 데이터로 추가 데이터 정보 구현
  const dummy = {
    SUBWAYEND: "성수",
    DISCOMFORT_LEVEL: 49.3,
    ARRIVETIME: "12:07:30",
    CONGESTION_LIST: [
      "50",
      "76",
      "73",
      "65",
      "30",
      "42",
      "30",
      "54",
      "30",
      "43",
    ],
    CURRENT_MIN_CONGESTION_CAR: 9,
    PREDICTION: {
      PRED_CONGESTION: [
        {
          이대: [
            43.01778793334961, 46.161434173583984, 63.19164276123047,
            64.3061294555664, 80.9529037475586, 65.91194152832031,
            64.77896118164062, 59.00312042236328, 54.280479431152344,
            50.22624969482422,
          ],
        },
        {
          아현: [
            10.875320434570312, 14.028264045715332, 10.036967277526855,
            5.990289211273193, 8.8689603805542, 7.987982749938965,
            9.896718978881836, 8.075178146362305, 8.897831916809082,
            4.963064193725586,
          ],
        },
        {
          충정로: [
            34.07307815551758, 33.937744140625, 32.952293395996094,
            36.92657470703125, 38.0701904296875, 43.908817291259766,
            33.98743438720703, 38.91814041137695, 29.91132164001465,
            25.074451446533203,
          ],
        },
      ],
      MIN_MEAN_INDEX: 1,
      MIN_VALUE_INDEX: 10,
      MEAN_ARRAY: [
        25.799108505249023, 31.308887481689453, 34.5000114440918,
        35.23606872558594, 36.77616500854492, 34.39113235473633,
        34.81535720825195, 30.413990020751953, 28.254932403564453,
        26.6827335357666,
      ],
    },
  };
  useEffect(() => {
    setSubwayData(dummy);
  }, []);

  // useEffect(() => {
  //   const fetchSubwayData = async (start, end) => {
  //     const url = `${BASE_URL}/subway/analyze/`;
  //     // const url = `${BASE_URL}/subway`;
  //     try {
  //       const response = await axios.get(url, {
  //         params: {
  //           start_station: start,
  //           end_station: end,
  //         },
  //         headers: {
  //           accept: "application/json",
  //         },
  //       });
  //       console.log(start);
  //       console.log(end);
  //       console.log(response);
  //       console.log("data", response.data);
  //       // Process the PRED_CONGESTION data
  //       // const congestionData = extractCongestionData(response.data);

  //       setSubwayData(response.data);

  //       // console.log("subway data", subwayData);
  //     } catch (error) {
  //       setSubwayData(null);
  //       console.error("Error:", error);
  //     }
  //   };
  //   // console.log(start);
  //   // console.log(end);
  //   fetchSubwayData(start, end);
  //   console.log("subway data", subwayData);
  // }, [start, end]);

  if (!subwayData) return <Loader />;

  return subwayData ? (
    <AnalyzeContainer>
      <ProjectText>🚇 출근길에서 살아남기 🚇</ProjectText>
      <ProjectText>
        {start}역 ➡️ {end}역
      </ProjectText>
      <AnalyzeHeader>
        <ProjectText2>
          지금 들어오는
          <b> {subwayData.SUBWAYEND} </b>행 열차
        </ProjectText2>

        <FinalScore>
          <IconFace discomfortScore={subwayData.DISCOMFORT_LEVEL} />
          출근길 불쾌지수:{" "}
          <DiscomfortLevelText discomfortScore={subwayData.DISCOMFORT_LEVEL}>
            {subwayData.DISCOMFORT_LEVEL}
          </DiscomfortLevelText>{" "}
          점
        </FinalScore>

        <ProjectText2>
          예상 도착 시간:
          <br />
          <b>{subwayData.ARRIVETIME}</b>
        </ProjectText2>
      </AnalyzeHeader>
      <AnalyzeContext>
        <AnalyzeItem>
          <Subtitle>⏰ 실시간 {start}역 열차 혼잡도 </Subtitle>
          <CongestionList congestionList={subwayData.CONGESTION_LIST} />
          {/* <IconFace discomfortScore={subwayData.DISCOMFORT_LEVEL} /> */}
        </AnalyzeItem>
        <AnalyzeItem>
          <Subtitle>🧚 추천 탑승칸</Subtitle>
          <InfoLists>
            <div>
              <CircleInfo>{subwayData.CURRENT_MIN_CONGESTION_CAR}</CircleInfo>
              <div>탑승 최소 혼잡도</div>
            </div>
            <div>
              <CircleInfo>{subwayData.PREDICTION.MIN_MEAN_INDEX}</CircleInfo>
              <div>경로 최소 혼잡도</div>
            </div>
            <div>
              <CircleInfo>{subwayData.PREDICTION.MIN_VALUE_INDEX}</CircleInfo>
              <div>경로중 최소 혼잡도</div>
            </div>
          </InfoLists>
        </AnalyzeItem>
        <AnalyzeItem>
          <Subtitle>📍 경로 간 평균 혼잡도</Subtitle>

          <CongestionList
            congestionList={subwayData?.PREDICTION.MEAN_ARRAY.map((value) =>
              Math.round(value)
            )}
          />
        </AnalyzeItem>
      </AnalyzeContext>

      <StyledButton onClick={handleButtonClick}>
        {showPrediction
          ? "⬆️ 경로 내 모든 역 혼잡도 예측 결과 닫기"
          : "⬇️ 경로 내 모든 역 혼잡도 예측 결과 보기"}
      </StyledButton>
      {showPrediction && renderPrediction()}

      <CustomBtn onClick={() => navigate("/")} text="새로 검색하기" />
    </AnalyzeContainer>
  ) : (
    <Loader />
  );
};

const ProjectText = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 5px;
`;
const ProjectText2 = styled.span`
  font-size: 1.2rem;
  font-weight: 400;
  margin-top: 20px;
  text-align: center;
`;
const AnalyzeContainer = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  /* margin-bottom: 20px; */
`;
const AnalyzeHeader = styled.div`
  width: 900px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 10px;
  }
`;
const AnalyzeContext = styled.div`
  border-radius: 30px;
  padding: 50px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  @media (max-width: 768px) {
    padding: 10px;
    box-shadow: none;
  }
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
    props.discomfortScore >= 110
      ? "var(--color-red)"
      : props.discomfortScore >= 70
      ? "var(--color-yellow)"
      : "var(--color-blue)"};
`;
const AnalyzeItem = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 1000px; */
  justify-content: flex-start;
  align-items: center;
  /* height: 70px; */
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
  }
`;

const InfoLists = styled.div`
  display: flex;
  width: 50vw;
  /* width: 80%; */
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  @media (max-width: 768px) {
    /* flex-direction: column; */
    width: 100vw;
    justify-content: space-around;
    align-items: center;
    font-size: 16spx;
  }
`;

const Subtitle = styled.div`
  border: none;
  display: flex;
  padding: 0.75rem 1.5rem;
  width: 200px;
  color: black;
  font-size: 1rem;
  line-height: 2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  margin-right: 2rem;
  box-shadow: 0 4px 6px -1px var(--color-gray), 0 2px 4px -1px var(--color-gray);
`;
const Subtitle2 = styled.div`
  border: none;
  display: flex;
  padding: 0.75rem 1.5rem;
  width: 150px;
  color: black;
  font-size: 1rem;
  line-height: 1.2rem;
  font-weight: 700;
  text-align: center;
  text-transform: uppercase;
  vertical-align: middle;
  align-items: center;
  border-radius: 0.5rem;
  margin-right: 2rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
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
  font-weight: 700;
  margin-bottom: 20px;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.2);
  }
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const StyledButton = styled.button`
  margin: 20px 0px;
  padding: 1.3em 3em;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  color: #000;
  background-color: #fff;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #23c483;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
const PredictionLists = styled.div`
  display: flex;
  flex-direction: row;
  /* width: 850px; */
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  //모바일 환경에서는 sidebar 숨기기
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;
export default Analyze;

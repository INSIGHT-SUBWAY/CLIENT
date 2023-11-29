import React from "react";
import "../style/color.css";
import styled from "styled-components";
import Loader from "../pages/loader/Loader";

const ListContainer = styled.div`
  width: 700px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    padding: 10px;
    width: 330px;
    /* flex: wrap; */
    /* width: 100vw; */
    flex-wrap: wrap;
  }
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  @media (max-width: 768px) {
    //모바일에서는 한 줄에 5칸씩 뜨도록 조정해줌
    width: 15%;
  }
`;
const ListItemBox = styled.div`
  width: 0;
  height: 0;

  border-bottom: 35px solid ${(props) => props.backgroundColor};
  border-right: 20px solid transparent;
  border-left: 50px solid ${(props) => props.backgroundColor};
  display: flex;
  /* align-items: center; */
  justify-content: flex-end;
  text-align: center;
  font-weight: 600;
  font-size: 26px;
  color: white;
  box-shadow: 0px 5px 5px -5px rgba(0, 0, 0, 0.75);
`;

function CongestionList({ congestionList }) {
  if (!congestionList || congestionList.length === 0) {
    return <div> 데이터 없음</div>;
  }
  return (
    <ListContainer>
      {congestionList.map((level, index) => {
        let backgroundColor = "";

        if (level >= 110) {
          backgroundColor = "var(--color-red)";
        } else if (level >= 70) {
          backgroundColor = "var(--color-yellow)";
        } else {
          backgroundColor = "var(--color-blue)";
        }

        return (
          <ListItem>
            <ListItemBox key={index} backgroundColor={backgroundColor}>
              {level}
            </ListItemBox>
            {index + 1}칸
          </ListItem>
        );
      })}
    </ListContainer>
  );
}

export default CongestionList;

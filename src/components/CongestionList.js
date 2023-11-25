import React from "react";
import "../style/color.css";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 700px;
  display: flex;
  gap: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
`;
const ListItemBox = styled.div`
  width: 0;
  height: 0;
  border-bottom: 40px solid ${(props) => props.backgroundColor};
  border-right: 30px solid transparent;
  border-left: 40px solid ${(props) => props.backgroundColor};
  display: flex;
  justify-content: flex-end;
  align-items: stretch;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  color: white;
`;

function CongestionList({ congestionList }) {
  return (
    <ListContainer>
      {congestionList.map((level, index) => {
        let backgroundColor = "";

        if (level >= 70) {
          backgroundColor = "var(--color-red)";
        } else if (level >= 40) {
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

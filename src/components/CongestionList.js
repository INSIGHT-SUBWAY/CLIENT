import React from "react";
import "../style/color.css";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ListItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ListItemBox = styled.div`
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  color: white;
  background-color: ${(props) => props.backgroundColor};
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

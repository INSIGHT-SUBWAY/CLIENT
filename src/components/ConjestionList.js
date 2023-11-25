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
  width: 60px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
          <ListItem key={index} backgroundColor={backgroundColor}>
            {level}
          </ListItem>
        );
      })}
    </ListContainer>
  );
}

export default CongestionList;

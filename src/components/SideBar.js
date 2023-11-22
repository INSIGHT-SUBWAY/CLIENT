//호선 선택하는 부분
import styled from "styled-components";
const SideBar = ({ onLineSelect }) => {
  return (
    <SideBarContainer>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((line) => (
        <div key={line}>
          <input
            type="radio"
            name="subwayLine"
            value={`${line}호선`}
            onChange={() => onLineSelect(`${line}호선`)}
          />
          {line}호선
        </div>
      ))}
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  position: fixed;
  left: 10px;
  top: 20vh;
  height: 80vh;
  width: 10vw;
`;
export default SideBar;

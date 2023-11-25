//호선 선택하는 부분
import styled from "styled-components";
const SideBar = ({ onLineSelect, selectedLine }) => {
  return (
    <SideBarContainer>
      {Array.from({ length: 9 }, (_, i) => i + 1).map((line) => (
        <div key={line}>
          <Input
            id={`line-${line}`}
            name="subwayLine"
            value={`${line}호선`}
            onChange={() => onLineSelect(`${line}호선`)}
            checked={selectedLine === `${line}호선`}
          />
          <Label htmlFor={`line-${line}`}>
            <Circle />
            <Text>{line}호선</Text>
          </Label>
        </div>
      ))}
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  position: absolute;
  left: 300px;
  top: 20vh;
  width: 10vw;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Input = styled.input.attrs({ type: "radio" })`
  display: none;

  &:checked + label {
    background-color: #ffcc00;

    div {
      border-color: #fff;
      background-color: #ffcc00;
    }

    span {
      color: #64748b;
    }
  }
`;

const Label = styled.label`
  display: flex;
  align-items: center;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
`;

const Circle = styled.div`
  width: 20px;
  height: 20px;
  border: 2px solid #ffcc00;
  border-radius: 50%;
  margin-right: 10px;
  transition: border-color 0.3s ease-in-out, background-color 0.3s ease-in-out;
`;

const Text = styled.span`
  font-size: 1rem;
  color: #333;
  transition: color 0.3s ease-in-out;
`;

export default SideBar;

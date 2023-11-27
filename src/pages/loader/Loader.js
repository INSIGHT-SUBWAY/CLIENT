import "./loader.element.css";
import styled from "styled-components";
const Loader = () => {
  return (
    <LoaderContainer>
      <div>
        <div className="box-of-star1">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star2">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star3">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div className="box-of-star4">
          <div className="star star-position1"></div>
          <div className="star star-position2"></div>
          <div className="star star-position3"></div>
          <div className="star star-position4"></div>
          <div className="star star-position5"></div>
          <div className="star star-position6"></div>
          <div className="star star-position7"></div>
        </div>
        <div data-js="astro" className="astronaut">
          <div className="head"></div>
          <div className="arm arm-left"></div>
          <div className="arm arm-right"></div>
          <div className="body">
            <div className="panel"></div>
          </div>
          <div className="leg leg-left"></div>
          <div className="leg leg-right"></div>
          <div className="schoolbag"></div>
        </div>
      </div>
      <LoadingText>
        <span>최적의 칸 🚆 을 찾는 중 입니다.</span>
        <br /> <br />
        <span>조금만 기다려주세요!</span>
      </LoadingText>
    </LoaderContainer>
  );
};

const LoaderContainer = styled.div`
  background: #000;
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
const LoadingText = styled.span`
  color: white;
  text-align: center;
  font-size: 1.5rem;
  position: fixed;
  bottom: 100px;
  left: 50%;
  transform: translate(-50%, -50%);
  //모바일 환경에서 숨기기
  @media (max-width: 768px) {
    display: none;
  }
`;
export default Loader;

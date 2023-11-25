import "./loader.element.css";
import styled from "styled-components";
const Loader = () => {
  return (
    <LoaderContainer>
      <div>
        <div class="box-of-star1">
          <div class="star star-position1"></div>
          <div class="star star-position2"></div>
          <div class="star star-position3"></div>
          <div class="star star-position4"></div>
          <div class="star star-position5"></div>
          <div class="star star-position6"></div>
          <div class="star star-position7"></div>
        </div>
        <div class="box-of-star2">
          <div class="star star-position1"></div>
          <div class="star star-position2"></div>
          <div class="star star-position3"></div>
          <div class="star star-position4"></div>
          <div class="star star-position5"></div>
          <div class="star star-position6"></div>
          <div class="star star-position7"></div>
        </div>
        <div class="box-of-star3">
          <div class="star star-position1"></div>
          <div class="star star-position2"></div>
          <div class="star star-position3"></div>
          <div class="star star-position4"></div>
          <div class="star star-position5"></div>
          <div class="star star-position6"></div>
          <div class="star star-position7"></div>
        </div>
        <div class="box-of-star4">
          <div class="star star-position1"></div>
          <div class="star star-position2"></div>
          <div class="star star-position3"></div>
          <div class="star star-position4"></div>
          <div class="star star-position5"></div>
          <div class="star star-position6"></div>
          <div class="star star-position7"></div>
        </div>
        <div data-js="astro" class="astronaut">
          <div class="head"></div>
          <div class="arm arm-left"></div>
          <div class="arm arm-right"></div>
          <div class="body">
            <div class="panel"></div>
          </div>
          <div class="leg leg-left"></div>
          <div class="leg leg-right"></div>
          <div class="schoolbag"></div>
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

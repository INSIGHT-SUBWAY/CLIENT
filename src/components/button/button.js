import "./button.element.css";

const CustomBtn = ({ onClick }) => {
  return (
    <div>
      <button class="learn-more" onClick={onClick}>
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text"> 탐색하러 가기</span>
      </button>
    </div>
  );
};

export default CustomBtn;

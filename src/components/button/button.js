import "./button.element.css";

const CustomBtn = ({ text, onClick }) => {
  return (
    <div>
      <button class="learn-more" onClick={onClick}>
        <span class="circle" aria-hidden="true">
          <span class="icon arrow"></span>
        </span>
        <span class="button-text">{text} </span>
      </button>
    </div>
  );
};

export default CustomBtn;

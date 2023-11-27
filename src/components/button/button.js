import "./button.element.css";

const CustomBtn = ({ text, onClick }) => {
  return (
    <div>
      <button className="learn-more" onClick={onClick}>
        <span className="circle" aria-hidden="true">
          <span className="icon arrow"></span>
        </span>
        <span className="button-text">{text} </span>
      </button>
    </div>
  );
};

export default CustomBtn;

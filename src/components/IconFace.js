import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faFaceMeh,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
import "../style/color.css";

function IconFace({ discomfortScore }) {
  let icon = null;
  let iconColor = "";

  //일단 임의로 설정
  if (discomfortScore >= 70) {
    icon = faFaceFrown;
    iconColor = " var(--color-red)";
  } else if (discomfortScore >= 40) {
    icon = faFaceMeh;
    iconColor = "var(--color-yellow)";
  } else {
    icon = faFaceSmile;
    iconColor = "var(--color-blue)";
  }

  const iconStyle = {
    color: iconColor,
  };

  return (
    <div>
      <FontAwesomeIcon icon={icon} size="3x" style={iconStyle} />
    </div>
  );
}

export default IconFace;

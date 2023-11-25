import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faFaceMeh,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";

function IconFace({ discomfortScore }) {
  let icon = null;
  let iconColor = "";

  //일단 임의로 설정
  if (discomfortScore >= 70) {
    icon = faFaceSmile;
    iconColor = "#0A6EBD";
  } else if (discomfortScore >= 40) {
    icon = faFaceMeh;
    iconColor = "#F2BE22";
  } else {
    icon = faFaceFrown;
    iconColor = "#F24C3D";
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

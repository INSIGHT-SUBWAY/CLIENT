import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmile,
  faFaceMeh,
  faFaceFrown,
} from "@fortawesome/free-solid-svg-icons";
import "../style/color.css";

function IconFace({ discomfortScore }) {
  const [hovered, setHovered] = useState(false);

  let icon = null;
  let iconColor = "";

  if (discomfortScore >= 70) {
    icon = faFaceFrown;
    iconColor = "var(--color-red)";
  } else if (discomfortScore >= 40) {
    icon = faFaceMeh;
    iconColor = "var(--color-yellow)";
  } else {
    icon = faFaceSmile;
    iconColor = "var(--color-blue)";
  }

  const iconStyle = {
    color: iconColor,
    transform: hovered ? "scale(1.1)" : "scale(1)",
    transition: "transform 0.3s",
  };

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <FontAwesomeIcon icon={icon} size="3x" style={iconStyle} />
    </div>
  );
}

export default IconFace;

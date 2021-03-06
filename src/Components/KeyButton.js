import { useState, useContext } from "react";

import { CalcContext } from "../CalcContext";

const styles = {
  keyContainer: {
    width: "25%",
    height: "16.5%",
    border: "1px solid #343434",
    boxSizing: "border-box",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  keyText: {
    color: "#fff",
    fontSize: 13,
  },
};

const getHoveredStyle = (hovered, isBlue, isNumber) => {
  let hoveredStyle = { cursor: "pointer" };
  const setHoveredBackground = (backgroundColor) => {
    hoveredStyle = { ...hoveredStyle, backgroundColor };
  };

  if (hovered) {
    if (isBlue) setHoveredBackground("#2a96eb");
    else setHoveredBackground("#999");
  }

  return hoveredStyle;
};

const KeyButton = ({ label, isNumber, isBlue, operator }) => {
  const { handleKeyClick } = useContext(CalcContext);

  const [hovered, setHovered] = useState(false);

  const isNumberStyle = isNumber ? { backgroundColor: "#070707" } : {};
  const isBlueStyle = isBlue ? { backgroundColor: "#134369" } : {};

  const hoveredStyle = getHoveredStyle(hovered, isBlue, isNumber);

  return (
    <div
      className="button"
      style={{
        ...styles.keyContainer,
        ...isNumberStyle,
        ...isBlueStyle,
        ...hoveredStyle,
      }}
      onMouseEnter={(e) => {
        setHovered(true);
      }}
      onMouseLeave={() => {
        setHovered(false);
      }}
      onClick={() => {
        handleKeyClick(label, isNumber, operator);
      }}
    >
      <span style={styles.keyText}>{label}</span>
    </div>
  );
};

export default KeyButton;

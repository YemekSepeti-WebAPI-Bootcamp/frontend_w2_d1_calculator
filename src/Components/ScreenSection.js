import { useContext } from "react";
import { CalcContext } from "../CalcContext";

const styles = {
  screenSection: {
    width: "100%",
    height: "30%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  mainText: {
    color: "#fff",
    fontSize: 30,
    padding: 10,
  },
  caption: {
    color: "#999",
    fontSize: 13,
    paddingRight: 10,
  },
};

const ScreenSection = () => {
  const { mainText, lastResult, currentOperation } = useContext(CalcContext);
  return (
    <div style={styles.screenSection}>
      {lastResult && currentOperation && (
        <span style={styles.caption}>
          {lastResult} {currentOperation}
        </span>
      )}

      <span style={styles.mainText}>{mainText}</span>
    </div>
  );
};

export default ScreenSection;

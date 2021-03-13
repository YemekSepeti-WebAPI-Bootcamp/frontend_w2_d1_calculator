import { useState } from "react";

import KeysSection from "./Components/KeysSection";
import ScreenSection from "./Components/ScreenSection";
import TopHeader from "./Components/TopHeader";

const styles = {
  appContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#e5e5e5",
  },
  calculaterContainer: {
    backgroundColor: "#222",
    width: "20vw",
    height: "70vh",
    minWidth: 250,
    maxWidth: 500,
  },
};

function App() {
  const [mainText, setMainText] = useState("0");
  const [lastResult, setLastResult] = useState();
  const [currentOperation, setCurrentOperation] = useState();

  const [resetMainTextNextTime, setResetMainTextNextTime] = useState(true);

  const handleKeyClick = (keyLabel, isNumber, operator) => {
    if (isNumber) {
      if (resetMainTextNextTime) {
        setMainText(keyLabel);
        setResetMainTextNextTime(false);
      } else setMainText(mainText + keyLabel);
    } else if (operator) {
      console.log({ keyLabel, isNumber, operator });
      setCurrentOperation(keyLabel);
      setResetMainTextNextTime(true);

      switch (keyLabel) {
        case "+":
          if (lastResult) {
            const result = parseInt(mainText) + lastResult;
            setLastResult(result);
            setMainText(result);
          } else {
            setLastResult(parseInt(mainText));
          }
          break;

        default:
          break;
      }
    }
  };

  return (
    <div style={styles.appContainer}>
      <div style={styles.calculaterContainer}>
        <TopHeader />
        <ScreenSection
          mainText={mainText}
          lastResult={lastResult}
          currentOperation={currentOperation}
        />
        <KeysSection onKeyClick={handleKeyClick} />
      </div>
    </div>
  );
}

export default App;

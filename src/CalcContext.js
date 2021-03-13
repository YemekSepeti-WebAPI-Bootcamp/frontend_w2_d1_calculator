import React, { useState, createContext } from "react";

export const CalcContext = createContext();

// Class Component ile yapmayı dene !
export const CalcProvider = (props) => {
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
    <CalcContext.Provider
      value={{
        mainText,
        setMainText,
        lastResult,
        setLastResult,
        currentOperation,
        setCurrentOperation,
        resetMainTextNextTime,
        setResetMainTextNextTime,
        handleKeyClick,
      }}
    >
      {props.children}
    </CalcContext.Provider>
  );
};

import KeyButton from "./KeyButton";

const styles = {
  container: {
    width: "100%",
    height: "65%",
    display: "flex",
    flexWrap: "wrap",
  },
};

const KeysSection = () => {
  // const dizi = [
  //   { label: "%" },
  //   { label: "CE" },
  //   { label: "CE" },
  //   { label: "BS" },
  // ];

  return (
    <div style={styles.container}>
      <KeyButton label="%" />
      <KeyButton label="CE" />
      <KeyButton label="C" />
      <KeyButton label="BS" />

      <KeyButton label="1/X" />
      <KeyButton label="x²" />
      <KeyButton label="²√X" />
      <KeyButton label="÷" operator />

      <KeyButton label="7" isNumber />
      <KeyButton label="8" isNumber />
      <KeyButton label="9" isNumber />
      <KeyButton label="x" operator />

      <KeyButton label="4" isNumber />
      <KeyButton label="5" isNumber />
      <KeyButton label="6" isNumber />
      <KeyButton label="-" operator />

      <KeyButton label="1" isNumber />
      <KeyButton label="2" isNumber />
      <KeyButton label="3" isNumber />
      <KeyButton label="+" operator />

      <KeyButton label="+/-" />
      <KeyButton label="0" isNumber />
      <KeyButton label="." />
      <KeyButton label="=" isBlue />
    </div>
  );
};

export default KeysSection;

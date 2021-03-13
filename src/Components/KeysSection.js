import KeyButton from "./KeyButton";

const styles = {
  container: {
    width: "100%",
    height: "65%",
    display: "flex",
    flexWrap: "wrap",
  },
};

const KeysSection = ({ onKeyClick }) => {
  // const dizi = [
  //   { label: "%" },
  //   { label: "CE" },
  //   { label: "CE" },
  //   { label: "BS" },
  // ];

  return (
    <div style={styles.container}>
      <KeyButton label="%" onKeyClick={onKeyClick} />
      <KeyButton label="CE" onKeyClick={onKeyClick} />
      <KeyButton label="C" onKeyClick={onKeyClick} />
      <KeyButton label="BS" onKeyClick={onKeyClick} />

      <KeyButton label="1/X" onKeyClick={onKeyClick} />
      <KeyButton label="x²" onKeyClick={onKeyClick} />
      <KeyButton label="²√X" onKeyClick={onKeyClick} />
      <KeyButton label="÷" operator onKeyClick={onKeyClick} />

      <KeyButton label="7" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="8" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="9" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="x" operator onKeyClick={onKeyClick} />

      <KeyButton label="4" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="5" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="6" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="-" operator onKeyClick={onKeyClick} />

      <KeyButton label="1" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="2" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="3" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="+" operator onKeyClick={onKeyClick} />

      <KeyButton label="+/-" onKeyClick={onKeyClick} />
      <KeyButton label="0" isNumber onKeyClick={onKeyClick} />
      <KeyButton label="." onKeyClick={onKeyClick} />
      <KeyButton label="=" isBlue onKeyClick={onKeyClick} />
    </div>
  );
};

export default KeysSection;

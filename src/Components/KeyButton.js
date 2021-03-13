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

const KeyButton = ({ label, isNumber }) => {
  const isNumberStyle = isNumber ? { backgroundColor: "#070707" } : {};

  return (
    <div
      className="button"
      style={{ ...styles.keyContainer, ...isNumberStyle }}
      on
    >
      <span style={styles.keyText}>{label}</span>
    </div>
  );
};

export default KeyButton;

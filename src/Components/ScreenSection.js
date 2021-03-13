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
  return (
    <div style={styles.screenSection}>
      <span style={styles.caption}>324+</span>
      <span style={styles.mainText}>4231</span>
    </div>
  );
};

export default ScreenSection;

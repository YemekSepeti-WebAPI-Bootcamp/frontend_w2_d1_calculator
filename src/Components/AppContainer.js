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

const AppContainer = ({ children }) => {
  return (
    <div style={styles.appContainer}>
      <div style={styles.calculaterContainer}>{children}</div>
    </div>
  );
};

export default AppContainer;

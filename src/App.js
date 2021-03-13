import AppContainer from "./Components/AppContainer";
import KeysSection from "./Components/KeysSection";
import ScreenSection from "./Components/ScreenSection";
import TopHeader from "./Components/TopHeader";

function App() {
  return (
    <AppContainer>
      <TopHeader />
      <ScreenSection />
      <KeysSection />
    </AppContainer>
  );
}

export default App;

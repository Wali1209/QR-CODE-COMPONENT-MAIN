import reactLogo from "./assets/react.svg";
import QRCodeComponent from "./components/QRCodeComponent";
import GlobalStyles from "./components/styles/Global.styled";
function App() {
  return (
    <>
      <GlobalStyles />
      <QRCodeComponent imgAlt="FrontEndMentorQRCode"></QRCodeComponent>
    </>
  );
}

export default App;

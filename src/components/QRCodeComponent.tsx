import { StyledQRCodeComponent } from "./styles/QRCodeComponent.styled";
function QRCodeComponent() {
  const frontEndMentor = "www.frontendmentor.io/";
  const srcFile = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${frontEndMentor}`;
  return (
    <>
      {console.log(srcFile)}
      <StyledQRCodeComponent>
        <img src={srcFile} alt="QR Code" />
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </StyledQRCodeComponent>
    </>
  );
}
export default QRCodeComponent;

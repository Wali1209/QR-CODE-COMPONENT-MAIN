import { StyledQRCodeComponent } from "./styles/QRCodeComponent.styled";
import { Container } from "./styles/QRCodeComponent.styled";

interface imgProps {
  imgAlt: string;
}

function QRCodeComponent(props: imgProps) {
  return (
    <Container>
      <StyledQRCodeComponent>
        <img src="../../images/image-qr-code.png" alt={props.imgAlt} />
        <h3>Improve your front-end skills by building projects</h3>
        <p>
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </StyledQRCodeComponent>
    </Container>
  );
}
export default QRCodeComponent;

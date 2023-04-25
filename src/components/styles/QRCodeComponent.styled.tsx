import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: #d5e1ef;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledQRCodeComponent = styled.div`
  width: 20rem;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 1px 20px rgba(0, 0, 0, 0.1);
  padding: 1rem;

  img {
    border-radius: 0.75rem;
  }
  h3 {
    font-size: 1.25rem;
    margin: 1rem;
  }
  p {
    font-size: 1rem;
    opacity: 0.6;
    margin: 0 1rem 1.5rem;
  }
`;

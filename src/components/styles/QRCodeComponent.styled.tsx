import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: calc(100vh);
  border: 2px solid black;
  background-color: hsl(220, 15%, 55%);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

export const StyledQRCodeComponent = styled.div`
  width: 300px;
  text-align: center;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 8px 10px rgba(0, 0, 0, 0.3);

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 50px;
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
  }
  h3 {
    font-size: 20px;
    margin: 12px 20px;
  }
  p {
    margin: 20px 20px 30px;
  }
`;

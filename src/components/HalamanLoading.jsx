import React from "react";
import ReactLoading from "react-loading";
import styled from "@emotion/styled";

const Container = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 99;
  /* From https://css.glass */
  background: rgba(5, 102, 188, 0.2);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(5, 102, 188, 0.3);
`;

const HalamanLoading = () => {
  return (
    <Container>
      <ReactLoading type={"spin"} color={"#333"} height={"20%"} width={"20%"} />
    </Container>
  );
};

export default HalamanLoading;

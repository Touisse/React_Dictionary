import { useState } from "react";
import styled from "styled-components";
import Content from "./components/Content";
import Navbar from "./components/Navbar";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  font-family: "Noto Serif", serif;
`;

function App() {
  return (
    <Container>
      <Navbar />
      <Content />
    </Container>
  );
}

export default App;

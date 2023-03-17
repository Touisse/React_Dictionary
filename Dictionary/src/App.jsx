import { useContext, useState } from "react";
import styled from "styled-components";
import Content from "./components/Content";
import Navbar from "./components/Navbar";
import { DictionaryContext } from "./context/Dictionary";

const Container = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: white;
  font-family: "Noto Serif", serif;
`;

function App() {
  const value = useContext(DictionaryContext);
  console.log(value);
  return (
    <Container>
      <Navbar />
      <Content />
    </Container>
  );
}

export default App;

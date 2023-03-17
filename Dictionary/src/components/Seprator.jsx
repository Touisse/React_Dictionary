import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 2rem;
  gap: 20px;
`;
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #cbc7c7;
`;
const Name = styled.h1`
  font-size: 20px;
  font-weight: 600;
  color: black;
`;
const Meaning = styled.h2`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 20px;
  font-weight: 500;
  color: grey;
  margin-top: 2rem;
  text-align: left;
`;

const Seprator = ({ name, Meanings }) => {
  return (
    <>
      <Container>
        <Name>{name}</Name>
        <Line />
      </Container>
      <Meaning>{Meanings}</Meaning>
    </>
  );
};

export default Seprator;

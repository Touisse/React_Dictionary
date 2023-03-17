import React from "react";
import styled from "styled-components";
import pic from "../assets/dictionary.avif";

import { BsLightbulb } from "react-icons/bs";

const Container = styled.div`
  background-color: white;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  border-bottom: 0.5px solid #cbc7c7;
`;
const Icon = styled.img`
  height: 50px;
  width: 50px;
`;
const Light = styled(BsLightbulb)`
  font-size: 25px;
  color: black;
  cursor: pointer;

  &:hover {
    color: yellow; /* Change the color to red when hovering over the icon */
  }
`;
const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
  color: black;
  text-align: center;
  margin: 2rem 0;
  text-shadow: 1px 1px 0px #ccc;
  letter-spacing: 0.1em;
  font-family: Georgia, "Times New Roman", Times, serif;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Navbar = () => {
  return (
    <Container>
      <Icon src={pic} alt="dictionary" />
      <Title>Your Dictionary</Title>
      <Light />
    </Container>
  );
};

export default Navbar;

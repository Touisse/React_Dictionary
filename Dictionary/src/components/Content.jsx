import React from "react";
import styled from "styled-components";
import { GiArchiveResearch } from "react-icons/gi";
import { SiBbciplayer } from "react-icons/si";
import Seprator from "./Seprator";

const Container = styled.div`
  width: 100vw;
  font-family: Georgia, "Times New Roman", Times, serif;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  flex-direction: column;
  gap: 20px;
`;
const Input = styled.input`
  width: 100%;
  height: 50px;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 20px;
  outline: none;
  background-color: #f5f5f5;
`;
const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 50%;
  height: 50px;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  font-size: 20px;
  outline: none;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;
const Word = styled.h1`
  font-size: 70px;
  font-weight: 500;
  color: black;
`;
const WordContainer = styled.div`
  width: 80%;
  height: 200px;
  border: none;
  border-radius: 5px;
  font-size: 20px;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 3rem;
  padding-right: 3rem;
`;
const P = styled.p`
  font-size: 20px;
  font-weight: 400;
  color: #be4ade;
`;
const Ul = styled.ul`
  width: 70%;
  padding: 0;
  margin: 0;
  list-style: none;
`;
const LI = styled.li`
  font-size: 15px;
  color: black;
  margin-top: 1rem;
  text-align: left;
  &::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    margin-right: 8px;
    background-color: #be4ade;
    border-radius: 50%;
  }
  &.quot {
    color: gray;
    font-size: 15px;
    font-weight: 400;
    padding: 0 10px;

    &::before {
      content: none;
    }
  }
`;
const Synonyms = styled.div`
  width: 80%;
  display: flex;
  align-items: center;
  justify-content: left;
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin-top: 2rem;
  text-align: left;
  gap: 20px;
`;
const Content = () => {
  return (
    <Container>
      <InputContainer>
        <Input type="text" />
        <GiArchiveResearch
          style={{
            fontSize: "30px",
            color: " #be4ade",
            cursor: "pointer",
          }}
        />
      </InputContainer>
      <WordContainer>
        <Word>
          Word
          <P>/hey/:d/</P>
        </Word>
        <SiBbciplayer
          style={{
            fontSize: "30px",
            color: " #be4ade",
            cursor: "pointer",
          }}
        />
      </WordContainer>
      <Seprator name="noun" Meanings="Meaning" />
      <Ul>
        <LI>kfjkdkfgkfgekfekfgkegfkegekfgekgekg</LI>
        <LI>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          doloribus rerum possimus sapiente blanditiis, ullam, nemo tenetur
          vitae veniam voluptate temporibus soluta quisquam consectetur
          accusantium? Facere harum vitae accusantium fugit!
        </LI>
        <LI>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
          velit maxime laboriosam, ad eveniet consequuntur repellendus
          reprehenderit tempora neque a porro hic animi earum eligendi
          accusantium distinctio! Itaque, unde fugiat.
        </LI>
      </Ul>
      <Synonyms>
        Synonyms <P className="synonym">electronic Keyboard</P>
      </Synonyms>
      <Seprator name="verb" Meanings="Meaning" />
      <Ul>
        <LI>kfjkdkfgkfgekfekfgkegfkegekfgekgekg</LI>
        <LI className="quot">"igigigititefteifetet"</LI>
      </Ul>
      <Seprator Meanings="Source" />
    </Container>
  );
};

export default Content;

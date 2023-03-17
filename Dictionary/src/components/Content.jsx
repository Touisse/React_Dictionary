import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GiArchiveResearch } from "react-icons/gi";
import { SiBbciplayer } from "react-icons/si";
import Seprator from "./Seprator";
import { getMeaningWord } from "../service/Dictionary";
import { DictionaryContext } from "../context/Dictionary";

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
const Sources = styled.div`
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
  flex-direction: column;
  margin-bottom: 5rem;
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
const Content = () => {
  const [data, setData] = useState([]);
  const [word, setWord] = useState("");
  console.log(data[0]);
  return (
    <Container>
      <InputContainer>
        <Input type="text" onChange={(e) => setWord(e.target.value)} />
        <GiArchiveResearch
          style={{
            fontSize: "30px",
            color: " #be4ade",
            cursor: "pointer",
          }}
          onClick={() => {
            getMeaningWord(word).then((data) => {
              setData(data.data);
            });
          }}
        />
      </InputContainer>
      <WordContainer>
        <Word>
          {word}
          <P>{data[0]?.phonetic}</P>
        </Word>
        <SiBbciplayer
          style={{
            fontSize: "30px",
            color: " #be4ade",
            cursor: "pointer",
          }}
          onClick={() => {
            const audio = new Audio(data[0].phonetics[0].audio);
            audio.play();
          }}
        />
      </WordContainer>
      {data[0]?.meanings?.map(({ partOfSpeech, definitions }) => (
        <>
          <Seprator name={partOfSpeech} Meanings="Meaning" />
          <Ul>
            {definitions?.map((definition) => (
              <LI key={definition?.definition}>
                {definition?.definition}
                {definition?.example && <p>{definition?.example}</p>}
              </LI>
            ))}
          </Ul>
        </>
      ))}
      <Meaning>Synonyms</Meaning>
      {data[0]?.meanings?.map(({ partOfSpeech, synonyms }) => (
        <>
          <Synonyms>
            {synonyms?.map((synonym) => (
              <Synonyms key={synonym}>
                <P className="synonym">{synonym}</P>
              </Synonyms>
            ))}
            
          </Synonyms>
        </>
      ))}

      <Sources>
        <Seprator Meanings="Sources" />
        {data[0]?.sourceUrls?.map((url) => (
          <Ul>
            <LI className="quot">
              <a href={url}> {url}</a>
            </LI>
          </Ul>
        ))}
      </Sources>
    </Container>
  );
};

export default Content;

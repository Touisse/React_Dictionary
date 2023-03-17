import React from "react";

export const DictionaryContext = React.createContext({
  word: "",
  setWord: () => {},
  meanings: [],
  setMeanings: () => {},
  category: "en",
  setCategory: () => {},
});

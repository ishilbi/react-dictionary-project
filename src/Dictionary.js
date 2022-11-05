import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data);
    console.log(response.data[0].meanings[0].definitions[0]);
    console.log(response.data[0].meanings[0].definitions[1]);
    console.log(response.data[0].meanings[0].synonyms[0]);
    console.log(response.data[0].meanings[0].synonyms[1]);
    console.log(response.data[0].meanings[0].synonyms[2]);
    console.log(response.data[0].phonetics[0]);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeywordChange}
          autoFocus={true}
          placeholder="Type your word"
        />
      </form>
      <Results results={results} />
    </div>
  );
}

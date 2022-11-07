import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    setResults(response.data[0]);
    console.log(response.data[0]);
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
      <section>
        <h1>What word do you want to search?</h1>
        <form onSubmit={search}>
          <input
            className="search-input"
            type="search"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          suggested words: sunset, wine, yoga, plant...
        </div>
      </section>
      <Results results={results} />
    </div>
  );
}

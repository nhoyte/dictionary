import React, { useState } from "react";
import axios from "axios";

import SearchResults from "./SearchResults";

import "./Search.css";

export default function Search() {
  let [term, setTerm] = useState(null);
  let [response, hasResponse] = useState(false);
  let [results, setResults] = useState({});

  function search(event) {
    event.preventDefault();
    searchTerm(term);
  }

  function updateTerm(event) {
    event.preventDefault();
    setTerm(event.target.value);
  }
  //Fetch response from SheCodes API: https://www.shecodes.io/learn/apis/dictionaryy
  function searchTerm(term) {
    let apiKey = "b00377005017b9aacft302b5od1aa426";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${term}&key=${apiKey}`;
    axios.get(url).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response);

    console.log(response.status);
    // Checks if word was not found by checking if response.data has a message
    if (response.data.message) {
      hasResponse(false);
      alert("Sorry, word not found...🤷🏾");
      window.location.reload(false);
    } else {
      setResults(response.data);
      hasResponse(true);
    }
  }
  if (response) {
    return (
      <div className="Search">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for definition..."
            className="SearchInput"
            onChange={updateTerm}
            autoFocus
          />
          <input type="submit" value="🔍 Search" className="SearchButton" />
        </form>
        <div className="SuggestedWords">
          Suggested Words: application, value, friend, shelter, fun
        </div>
        <SearchResults result={results} />
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form onSubmit={search}>
          <input
            type="search"
            placeholder="Search for definition..."
            className="SearchInput"
            onChange={updateTerm}
            autoFocus
          />
          <input type="submit" value="🔍 Search" className="SearchButton" />
        </form>
        <div className="SuggestedWords">
          Suggested Words: application, value, friend, shelter, fun
        </div>
        <div className="homeImage">
          <img src="\Dictionary_Blue.jpg" alt="Dictionary" />
        </div>
      </div>
    );
  }
}

import React, { useState } from "react";
import axios from "axios";

import "./Search.css";

export default function Search() {
  let [term, setTerm] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${term} definition 🔍`);
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
    console.log(response.data);
  }
  return (
    <div className="Search container">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for definition..."
          className="SearchInput"
          onChange={updateTerm}
          autoFocus
        />
        <input type="submit" value="Search" className="SearchButton" />
      </form>
    </div>
  );
}

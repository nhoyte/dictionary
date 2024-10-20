import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [term, setTerm] = useState(null);

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${term} definition 🔍`);
  }

  function updateTerm(event) {
    event.preventDefault();
    setTerm(event.target.value);
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

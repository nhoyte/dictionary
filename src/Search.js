import React, { useState } from "react";
import axios from "axios";

import SearchResults from "./SearchResults";
import Images from "./Images";

import "./Search.css";

export default function Search() {
  let [term, setTerm] = useState(null);
  let [response, hasResponse] = useState(false);
  let [results, setResults] = useState({});
  let [imageResults, setImageResults] = useState({});

  function search(event) {
    event.preventDefault();
    searchTerm(term);
  }

  function updateTerm(event) {
    event.preventDefault();
    setTerm(event.target.value);
  }

  function searchTerm(term) {
    //Fetch response from SheCodes Dictionary API: https://www.shecodes.io/learn/apis/dictionary
    let apiKey = "b00377005017b9aacft302b5od1aa426";
    let url = `https://api.shecodes.io/dictionary/v1/define?word=${term}&key=${apiKey}`;
    axios.get(url).then(handleResponse);

    // Make API call to Images API: https://www.shecodes.io/learn/apis/images
    let imageAPIKey = "b00377005017b9aacft302b5od1aa426";
    let imageURL = `https://api.shecodes.io/images/v1/search?query=${term}&key=${imageAPIKey}`;
    axios.get(imageURL).then(handleImageResponse);
  }
  function handleResponse(response) {
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
  function handleImageResponse(response) {
    setImageResults(response.data.photos);
  }

  if (response) {
    console.log(imageResults);
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
        <div className="ImageGrid">
          {/* Displays the first 6 images */}
          {imageResults.map(function (image, index) {
            return (
              <div key={index}>
                <a href={image.src.original} target="_blank" rel="noreferrer">
                  <Images image={image} />
                </a>
              </div>
            );
          })}
        </div>
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

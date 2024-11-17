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
    searchImage(term);
  }

  function updateTerm(event) {
    event.preventDefault();
    setTerm(event.target.value);
  }

  function searchTerm(term) {
    //Fetch response from Free Dictionary API: https://dictionaryapi.dev/
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`;
    axios
      .get(url)
      .then(handleResponse)
      .catch(function (error) {
        if (error.response) {
          hasResponse(false);
          alert(
            "Sorry, word not found...🤷🏾. Please check your spelling and try again."
          );
          window.location.reload(false);
          // The request was made and word not found
          console.log(error.response.data);
        }
      });
  }
  function searchImage(term) {
    // Make API call to Images API: https://www.shecodes.io/learn/apis/images
    let imageAPIKey = "b00377005017b9aacft302b5od1aa426";
    let imageURL = `https://api.shecodes.io/images/v1/search?query=${term}&key=${imageAPIKey}`;
    axios
      .get(imageURL)
      .then(handleImageResponse)
      .catch(function (error) {
        if (error.response) {
          hasResponse(false);
          console.log("No images found...");
          // The request was made and no images were returned
          console.log(error.response.data);
        }
      });
  }

  function handleResponse(response) {
    setResults(response.data[0]);
    hasResponse(true);
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
        <Images images={imageResults} />
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

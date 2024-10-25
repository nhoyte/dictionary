import React from "react";
import Meanings from "./Meanings";
import "./SearchResults.css";

export default function SearchResults(props) {
  return (
    <div className="SearchResults container-inner">
      <div className="text-capitalize SearchedWord">{props.result.word}</div>
      <div className="Phonetics">/{props.result.phonetic}/</div>
      {props.result.meanings.map(function (meaning, index) {
        return (
          <div className="MeaningSection" key={index}>
            <Meanings data={meaning} />
          </div>
        );
      })}
    </div>
  );
}

import React from "react";
import Meanings from "./Meanings";
import "./SearchResults.css";

export default function SearchResults(props) {
  return (
    <div className="SearchResults container-inner">
      <section>
        <div className="text-capitalize SearchedWord">{props.result.word}</div>
        <div className="Phonetics">/{props.result.phonetic}/</div>
      </section>
      {/* Displays the first 5 definitions */}
      {props.result.meanings.map(function (meaning, index) {
        if (index < 5) {
          return (
            <div className="MeaningSection" key={index}>
              <Meanings data={meaning} />
            </div>
          );
        }
      })}
    </div>
  );
}

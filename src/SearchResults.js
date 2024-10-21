import React from "react";
import "./SearchResults.css";

export default function SearchResults(props) {
  let synonyms = props.result.meanings[0].synonyms;
  //    function Synonyms() {
  //     if (props.result.meanings[0].synonyms != null)
  //   {
  //     synonyms.map(function (term, index) {
  //       return (
  //         <div className="col" key={index}>
  //           {term}
  //         </div>
  //       );
  //     });
  //   }
  //    }
  return (
    <div className="SearchResults container-inner">
      <div className="text-capitalize SearchedWord">{props.result.word}</div>
      <div className="Phonetic">/{props.result.phonetic}/</div>
      <div className="text-capitalize PartOfSpeech">
        {props.result.meanings[0].partOfSpeech}
      </div>
      <div className="Definition"> {props.result.meanings[0].definition}</div>
      <div className="Synonyms row">
        {synonyms.map(function (term, index) {
          return (
            <div className="col" key={index}>
              {term}{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

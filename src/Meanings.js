import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <div className="text-capitalize PartOfSpeech">
        {props.data.partOfSpeech}
      </div>
      <div className="Definition"> {props.data.definition}</div>
      <p className="ExampleSentence">
        <span className="Example">Example</span>:{" "}
        <em>"{props.data.example}"</em>
      </p>
    </div>
  );

  /* <div className="Synonyms row">
          {synonyms.map(function (term, index) {
            return (
              <div className="col" key={index}>
                {term}{" "}
              </div>
            );
          })}
        </div> */
}

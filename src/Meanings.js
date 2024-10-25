import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  function DisplayExamples() {
    if (props.data.example) {
      return (
        <p className="ExampleSentence">
          <span className="Example">Example</span>:{" "}
          <em>"{props.data.example}"</em>
        </p>
      );
    }
  }
  function DisplaySynonyms() {
    if (props.data.synonyms) {
      return (
        <div className="row Synonyms">
          Synonyms:
          {props.data.synonyms.map(function (term, index) {
            return (
              <div className="SynonymWord" key={index}>
                {term}{" "}
              </div>
            );
          })}
        </div>
      );
    }
  }
  return (
    <section>
      <div className="Meanings">
        <div className="text-capitalize PartOfSpeech">
          {props.data.partOfSpeech}
        </div>
        <div className="Definition"> {props.data.definition}</div>
        {DisplayExamples()}
        {DisplaySynonyms()}
      </div>
    </section>
  );
}

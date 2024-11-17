import React from "react";
import "./Meanings.css";

export default function Meanings(props) {
  function DisplayExamples() {
    if (props.data.definitions[0].example) {
      return (
        <p className="ExampleSentence">
          <span className="Example">Example</span>:{" "}
          <em>"{props.data.definitions[0].example}"</em>
        </p>
      );
    } else {
      return null;
    }
  }
  function DisplaySynonyms() {
    if (props.data.synonyms.length > 0) {
      return (
        <div className="row Synonyms">
          Synonyms:
          {props.data.synonyms.map(function (term, index) {
            return (
              <div className="SynonymWord" key={index}>
                {term}
                {"  "}
              </div>
            );
          })}
        </div>
      );
    } else {
      return null;
    }
  }
  return (
    <section>
      <div className="Meanings">
        <div className="text-capitalize PartOfSpeech">
          {props.data.partOfSpeech}
        </div>
        <div className="Definition">
          {" "}
          {props.data.definitions[0].definition}
        </div>
        {DisplayExamples()}
        {DisplaySynonyms()}
      </div>
    </section>
  );
}

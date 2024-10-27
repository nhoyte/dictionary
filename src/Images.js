import React from "react";
import "./Images.css";

export default function Images(props) {
  return (
    <div className="Image">
      <img
        src={props.image.src.landscape}
        alt={props.image.alt}
        className="img-fluid"
      />
    </div>
  );
}

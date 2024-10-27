import React from "react";
import "./Images.css";

export default function Images(props) {
  if (props.images) {
    return (
      <div className="ImageGrid">
        {props.images.map(function (image, index) {
          return (
            <div className="Image" key={index}>
              <a href={image.src.original} target="_blank" rel="noreferrer">
                <img
                  src={image.src.landscape}
                  alt={image.alt}
                  className="img-fluid"
                />
              </a>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}

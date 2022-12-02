import React from "react";

export default function Examples(props) {
  if (props.example) {
    return (
      <div className="Examples">
        {props.examples.map(function (example, index) {
          return <span key={index}>{example}</span>;
        })}
      </div>
    );
  } else {
    return "We couldn't find any examples. ";
  }
}

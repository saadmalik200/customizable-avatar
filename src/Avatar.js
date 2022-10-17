import React from "react";
import "./Avatar.css";

function Avatar(props) {
  return (
    <div>
      <img
        className={`avatar-${props.type || "square"} avatar-${
          props.size || "m"
        }`}
        src={props.src}
        alt=""
      />
    </div>
  );
}

export default Avatar;

import React, { useState, useEffect } from "react";
import Avatar from "./Avatar";
import "./App.css";

function App() {
  const sizes = [
    { size: "s", width: "30", height: "30" },
    { size: "m", width: "60", height: "60" },
    { size: "l", width: "120", height: "120" },
    { size: "xl", width: "200", height: "200" },
  ];
  const type = ["square", "rounded", "circle"];

  return sizes.map((size, i) => (
    <div className="card-collection">
      {/* Small size */}
      <div className="card">
        <div className="card-content">
          <Avatar
            src="https://picsum.photos/400/400"
            size={size.size}
            type="circle"
          />
          <p>
            size <strong>{size.size}</strong> with {size.width}x{size.height}
          </p>
          <p>
            type <strong>square</strong>
          </p>
        </div>
      </div>
    </div>
  ));

  // <div className="App">
  //   <Avatar src="https://picsum.photos/400/400" size="xl" type="circle" />
  // </div>
}

export default App;

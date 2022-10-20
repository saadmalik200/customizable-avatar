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
  const types = ["square", "rounded", "circle"];

  return (
    <div>
      <div className="flex gap-3">
        {types.map((type, i) => (
          <div className="card-collection ">
            {/* Small size */}
            <div className="card ">
              <div className="card-content w-[20rem]">
                {sizes.map((size, i) => {
                  return (
                    <>
                      <Avatar
                        src="https://picsum.photos/400/400"
                        size={size.size}
                        type={type}
                      />
                      <p>
                        size <strong>{size.size}</strong> with {size.width}x
                        {size.height}
                      </p>
                      <p>
                        type <strong>{type}</strong>
                      </p>
                    </>
                  );
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;

// return (
//   <div>
//     <div>
//       {sizes.map((size, i) => (
//         <div className="card-collection">
//           {/* Small size */}
//           <div className="card">
//             <div className="card-content">
//               {types.map((type, i) => {
//                 return (
//                   <>
//                     <Avatar
//                       src="https://picsum.photos/400/400"
//                       size={size.size}
//                       type={type}
//                     />
//                     <p>
//                       size <strong>{size.size}</strong> with {size.width}x
//                       {size.height}
//                     </p>
//                     <p>
//                       type <strong>{type}</strong>
//                     </p>
//                   </>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   </div>
// );

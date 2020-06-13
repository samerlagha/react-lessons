import React, { useState } from "react";
import Clock from "./Clock";

const App = () => {
  const [hide, setHiden] = useState(true);

  return (
    <>
      <button className="btn" onClick={() => 
        setHiden(hide ? false : true)}>
            
        {hide ? "hide" : "show"}
      </button>

      {hide ? (
        <>
          <Clock location="Kiyv" offset={2} />
          <Clock location="London" offset={0} />
          <Clock location="New York" offset={-5} />
        </>
      ) : null}
    </>
  );
};
export default App;

// const App = () => {
//     return (
//         <>
//             <Clock location="London" offset={0} />
//             <Clock location="Kiev" offset={2} />
//             <Clock location="New York" offset={-5} />
//         </>
//     );
// };

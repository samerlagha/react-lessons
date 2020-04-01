// import React from 'react';

// const Logout = props=>{
//     return(
//         <button className="logout btn" onClick={props.onLogout}>
//             Logout
//         </button>
//     );
// };


// export default Logout;

import React from "react";

const Logout = props => {
  return (
    <button className="logout btn" onClick={props.hideLogout}>
      Logout
    </button>
  );
};

export default Logout;
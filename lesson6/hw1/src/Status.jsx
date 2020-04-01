import React, { Component } from 'react';
import Online from './Online';
import Offline from './Offline';

// class Status extends Component{
//   state = {
//     isOnline: false
//   };
//   render(){
//     return (
//       this.state.isOnline
//         ? <Online />
//         : <Offline />      
//     );
//   }
// }
// export default Status;

const Status = (props) => {
    return (
        <div class="status">
            {props.isOnline? <Online /> : <Offline />}
        </div>
    )
};

export default Status;
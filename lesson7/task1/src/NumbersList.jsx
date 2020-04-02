import React from 'react';


const NumbersList = ({numbers})=>{
   // const {numbers} =props;
//   const numberElems=numbers.map(num => <li>{num}</li>);
    return(
       
           <ul>
              {
               numbers.map(num =>(

                <li key={num}>{num}</li>)
               )
               
              }  
           </ul>
       
       
        // <ul>{numberElems}</ul>
    );
}


export default NumbersList;
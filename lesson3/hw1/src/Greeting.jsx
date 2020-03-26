import React from 'react';
import moment from 'moment';

 const getAge = BirthDate =>{

    return new Date().getFullYear() - new Date(BirthDate).getFullYear();
 }

 const Greeting = props=>{

    return(
        <header className="greeting">
            {`My name is ${props.firstName} ${props.lastName}. I'm ${getAge(props.birthDate)} years old`}
        </header>
    )
 };

 export default Greeting;
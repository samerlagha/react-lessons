import React from 'react';
import UserForm from './UserForm';

const App = () =>{

    return(
        <UserForm
        
        onSubmit ={formData=>console.log(formdata)}
        />
    );
}

export default App;
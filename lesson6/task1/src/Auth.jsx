import React  from 'react';
import Greeting from './Greeting'

class Auth extends React.Component{

    render(){
        return(
            <div className="panel">
                <Greeting />
            </div>
        );
    }
}
export default Auth;
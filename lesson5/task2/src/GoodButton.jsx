import React from 'react';

class GoodButton extends React.Component{

  handleClick(){
    // alert('Good job!');

    // alert(document.querySelector('.fancy-button').textContent);
    alert(event.target.value)
  
  }
    render(){

        return(
            <button 
            className="fancy-button"
            onClick={this.handleClick} 
            value=  'CLICK ME!'
            
            >
          CLICK ME!
          </button>
        );
    };
};

export default GoodButton;
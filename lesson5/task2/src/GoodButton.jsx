import React from 'react';

class GoodButton extends React.Component{

  handleClick(){
    // alert('Good job!');
    alert(document.querySelector('.fancy-button').textContent);
  }
    render(){

        return(
            <button 
            className="fancy-button"
            onClick={this.handleClick} 
            
            >
            Click me!
          </button>
        );
    };
};

export default GoodButton;
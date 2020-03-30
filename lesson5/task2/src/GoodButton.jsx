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
          CLICK ME!
          </button>
        );
    };
};

export default GoodButton;
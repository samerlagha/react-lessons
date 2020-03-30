import React from 'react';

class GoodButton extends React.Component{

  handleClick(event){
    // alert('Good job!');

    // alert(document.querySelector('.fancy-button').textContent);
    // alert(event.target.value)
    alert(event.target.textContent)
  
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
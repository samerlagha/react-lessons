import React from 'react';


export default class Search extends React.Component{

    state ={
        value:' ',
    };
    onInputChange =e =>{
        this.setState({
            value: e.target.value,
        });
    }

    onSearch =e=>{

        e.preventDefault();
        alert(`Search text: ${this.state.value}`);
    }


    render(){

        return(

            <form className="search" onSubmit={this.onSearch}>
            <input
                type="text"
                className="search__input"
                onChange={this.onInputChange}
                value={this.state.value}
            />
            <button className="search__button" type="submit">
                Search
            </button>
        </form>
        )
    }
}





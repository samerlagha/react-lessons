import React , { Component } from 'react';

import Dialog from './Dialog';

export default class App extends Component{
  
    state={
        isOpen: false,
    }

    hideDialog=()=>{
        this.setState({
            isOpen:false,
        })
    }

    showDialog=()=>{
        this.setState({
            isOpen:true,
        })
    }
    render(){

        
        return (
            <div className="app">
                <button className="btn" onClick={this.showDialog}>Show</button>
                <Dialog isOpen={this.state.isOpen} title="some title"
                 onClose={this.hideDialog}
                >
                   <p>Some text</p>
                    
                 </Dialog>
            </div>
        )
    }
}

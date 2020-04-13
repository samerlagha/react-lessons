import React from 'react';
import Numbers from './Numbers';
import OddNumbers from './OddNumbers';
import EvenNumbers from './EventNumbers';
 class  App extends React.Component{
  state={
      number: 0,
  }

  componentDidMount(){
      this.intervalid = setInterval(() => {
          this.setState({
              number: this.state.number +1,
          })
      }, 1000);
  }

  componentWillUnmount(){
      clearInterval(this.intervalid);
  }

    render(){
        return(
            <div className="app">
                <OddNumbers title="Odd numbers" number={this.state.number} />

                <EvenNumbers title="Even numbers" number={this.state.number} />
                <Numbers title="All numbers" number={this.state.number} />
                <Numbers title="All numbers" number={17} />

            </div>
        )
    }
   
}

export default App;
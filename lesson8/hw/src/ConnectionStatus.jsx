import React from 'react';

class ConnectionStatus extends React.Component {

 constructor(props){
     super(props);
     this.state={
         status:true,
     }
 }
 componentDidMount(){
    window.addEventListener('offline', this.offlineToggler);
    window.addEventListener('online', this.onlineToggler);
 }

 componentWillUnmount (){
    window.addEventListener('offline', this.offlineToggler);
    window.addEventListener('online', this.onlineToggler);
 }

  offlineToggler =()=>{
      this.setState({
        status:true
        
      })
  }
  
  onlineToggler =()=>{
      this.setState({
          status:false
      })
  }
    render() {
        return(
            this.state.status ?
            <div className="status">online</div> :
            <div className="status status_offline">Offline</div>
        );
    }

    }
  

export default ConnectionStatus;
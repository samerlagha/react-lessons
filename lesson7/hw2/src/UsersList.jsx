import React from 'react';
import User from './User';
import Pagination from './Pagination';

class UsersList extends React.Component{


    constructor(props){
        super(props);

        this.state={
            currentPage:0,
        }
    }
    goPrev=()=>{
        this.setState({
            currentPage:this.state.currentPage -1 ,
        })
    }

    goNext=()=>{
        this.setState({
            currentPage:this.state.currentPage +1,
        })
    }

    render(){
        const currentPage=this.state.currentPage;
        const nextPage=currentPage*3;
        const showUsers= this.props.users
        .slice(currentPage*3,nextPage +3);
        return(

        <>
        <Pagination 
        
        goPrev={this.goPrev}
        goNext={this.goNext}
        currentPage={this.state.currentPage}
        totalItems={this.props.length}
        itemPerPage ={this.state.showUsers} />
        <ul className="users">
          {
              showUsers.map(user=>
                <User key={user.id} {...user}/>
                )
          }
        </ul>
        </>

        )
        
    }
}

export default UsersList;
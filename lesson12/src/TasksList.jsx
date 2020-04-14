import React from 'react';
import Task from './Task';
import CreateTaskInput from './CreateTaskInput';
import { createTask ,fetchTasksList,updateTask,deleteTask} from './TasksGateway';



export default class TasksList extends React.Component{
 state={

    tasks:[],
 };
componentDidMount(){
    this.fetchTasks();
};
 fetchTasks =()=>{
     fetchTasksList().then(TasksList=>
        this.setState({
            tasks: TasksList,
        }),
    
    );
} ;
 

 onCreate = text=>{

 
      const newTask={
          text,
          done:false,
      };
      createTask(newTask)
        .then(()=> this.fetchTasks());
    };


 handleTaskstatuschange=id=>{

    const { done , text } = this.state.tasks.find(
        task => task.id ===id
    );

    const updatedTask={
        text,
        done:!done,
    };
    updateTask(id,updatedTask).then(()=>this.fetchTasks);
    
 };
 handleTaskDelete =id =>{

    deleteTask(id)
    .then(()=>this.fetchTasks())
     
 };
    render() {

        const sortedList= this.state.tasks
              .slice()
              .sort((a,b)=>a.done - b.done);
        return(
            <div className="todo-list">
             <CreateTaskInput
              onCreate={this.onCreate} />
            <ul className="list">
             {sortedList.map(task=>
               <Task
               {...task}
                key={task.id} 
               onDelete={this.handleTaskDelete}
               onChange={this.handleTaskstatuschange}/>
             )}
               
            </ul>
            </div>
           
          );
      }
    }


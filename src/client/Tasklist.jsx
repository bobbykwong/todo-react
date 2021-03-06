import React from 'react';
import Task from './Task';

class Tasklist extends React.Component{
    render(){
        const tasks = this.props.tasks.map((task, taskID) => {
        return (
            <Task task={task} taskID={taskID} completeTask={this.props.completeTask}/>
        )
    })
        return(
            <div>
                {tasks}
            </div>
        )
    }
}

export default Tasklist;
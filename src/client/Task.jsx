import React from 'react';

class Task extends React.Component{
    render(){
        const task = this.props.task
        const taskID = this.props.taskID

        return(
            <div>
                <p>{task}</p>
                <button onClick={() => {this.props.completeTask(taskID)}}>Completed Task</button>
            </div>
        )
    }
}

export default Task;
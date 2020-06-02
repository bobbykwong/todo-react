import React from 'react';

class Task extends React.Component{
    render(){
        const task = this.props.task
        const taskID = this.props.taskID
        return(
            <div>
                <input type="checkbox" value="taskID"/>
                <label>{task}</label>
            </div>
        )
    }
}

export default Task;
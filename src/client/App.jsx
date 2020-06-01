import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
        super()

        this.state = ({
            taskInput: "",
            tasks: [],
            errorOne: false,
            errorTwo: true
        })

        this.changeHappened = (event) => {
            this.setState({
                taskInput: event.target.value
            })
        }

        this.clickHappened = () => {
            const newTask = this.state.taskInput;
            if (newTask.split('').length > 1) {
                this.setState({
                    tasks: [...this.state.tasks, newTask],
                    taskInput: "",
                    errorOne: false
                })
            }
            else{
                this.setState({
                    errorOne: true
                })
            }
        }

        this.completeTask = () => {

        }
    }


  render() {
    console.log(this.state)

    const tasks = this.state.tasks.map((task, taskID) => {
        return (
            <div>
                <input type="checkbox" value="taskID"/>
                <label>{task}</label>
            </div>
        )
    })

    let errorOne;
    if (this.state.errorOne === true) {
        errorOne = <p>Task needs to be more than 1 character</p>
    }else{
        errorOne = <p></p>
    }


    return (
      <div>
        <div>
            <div>{tasks}</div>
            <button onClick={() => {this.completeTask()}}>Completed Task</button>
        </div>
        <div>
            <input onChange={(event) => {this.changeHappened(event)}} value={this.state.taskInput}/>
            {errorOne}
            <button onClick={() => {this.clickHappened()}} >Submit</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
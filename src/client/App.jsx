import React from 'react';
import { hot } from 'react-hot-loader';
import Tasklist from './Tasklist';

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

    let errorOne;
    if (this.state.errorOne === true) {
        errorOne = <p>Task needs to be more than 1 character</p>
    }else{
        errorOne = <p></p>
    }


    return (
      <div>
        <div>
            <input onChange={(event) => {this.changeHappened(event)}} value={this.state.taskInput}/>
            {errorOne}
            <button onClick={() => {this.clickHappened()}} >Submit</button>
        </div>
        <div>
            <div>
                <Tasklist tasks={this.state.tasks} />
            </div>
            <button onClick={() => {this.completeTask()}}>Completed Task</button>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
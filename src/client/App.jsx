import React from 'react';
import { hot } from 'react-hot-loader';

class App extends React.Component {
    constructor(){
        super()

        this.state = ({
            taskInput: "",
            tasks: []
        })

        this.changeHappened = (event) => {
            this.setState({
                taskInput: event.target.value
            })
        }

        this.clickHappened = () => {
            const newTask = this.state.taskInput;

            this.setState({
                tasks: [...this.state.tasks, newTask],
                taskInput: ""
            })
        }
    }


  render() {
    console.log(this.state)

    const tasks = this.state.tasks.map(task => {
        return (
            <p>{task}</p>
        )
    })

    return (
      <div>
        <div>{tasks}</div>
        <input onChange={(event) => {this.changeHappened(event)}} value={this.state.taskInput}/>
        <button onClick={() => {this.clickHappened()}} >Submit</button>
      </div>
    );
  }
}

export default hot(module)(App);
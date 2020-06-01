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
            this.setState({
                tasks: [...this.state.tasks, this.state.taskInput]
            })
        }
    }


  render() {
    console.log(this.state)
    return (
      <div>
        <div>{this.state.tasks}</div>
        <input onChange={(event) => {this.changeHappened(event)}}/>
        <button onClick={() => {this.clickHappened()}} >Submit</button>
      </div>
    );
  }
}

export default hot(module)(App);
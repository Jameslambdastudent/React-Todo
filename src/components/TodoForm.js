
import React, { Component } from 'react'
import { findRenderedDOMComponentWithClass } from 'react-dom/test-utils'

export class TodoForm extends Component {
    constructor() {
        super()
        this.state = {newTodo: ""}
    }

    handleChange = event => {
        this.setState({
            newTodo: event.target.value
        })

        handleSubmit = event => {
            event.preventDefault()
            this.props.addNewTask(this.state.newTodo)
            this.setState({ newTodo: ""})
        }
    }
    render() {
        return (
            <div>
              <form onSubmit={this.handleSubmit}>
                  <input type='text' name="newTodo" value={this.state.newTodo} onChange={this.handleChange} />
                  <button>+</button>
              </form>
            </div>
        )
    }
}

export default TodoForm

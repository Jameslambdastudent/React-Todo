import React, { Component } from 'react'
import { TodoList } from './components/TodoList'
import { TodoForm  } from './components/TodoForm'



const todoList = [
  {
    task: 'Fry Fish',
    id: 0,
    completed: false
  },
  
  {
  task: 'Boil Egg',
  id: 1,
  completed: false
  }
]

 class App extends Component {
   constructor() {
     super()
     this.state = {todoList: todoList}
   }

   toggleItem = clickedId => {
     const newTaskList = this.state.todoList.map(task => {
      if (task.id === clickedId) {
        return {
          ...task, completed: !task.completed
        }
      } else {
        return task
      }
     })
     this.setState({
       todoList: newTaskList
     })
   }

   addNewTask = taskText => {
     const newTask = {
       task: taskText,
       id: Date.now(),
       completed: false
     }
     this.setState({
       todoList: [...this.state.todoList, newTask]
     })
   }

   clearCompleted = event => {
     event.preventDefault()
     this.setState({
       todoList: this.state.todoList.filter(task => !task.completed)
     })
   }
  
  
   render() {
    return (
      <div>
        <h1>Todo-List</h1>
        <TodoList todoList={this.state.toggleItem} toggleItem={this.toggleItem} clearCompleted={this.clearCompleted} />
        <TodoForm addNewTask={this.addNewTask} />
      </div>
    )
  }
}

export default App





  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

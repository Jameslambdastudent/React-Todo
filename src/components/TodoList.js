// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import Todo from './Todo'

export default function TodoList(props) {
    return (
        <div>
            {props.TodoList.map((item) => (
                <Todo key={item.id} item={item} toggleItem={props.toggleItem} />
            ))}
            <button onClick={props.clearCompleted}>Clear</button>

        
        </div>
    )
}

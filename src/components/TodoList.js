import React from 'react'
// importing component

import Todo from './Todo';

const TodoList = ({todos, setTodos}) => {
  
  return (
      <div className="todo-list">
        {todos.map((todo) => (
          <Todo todos={todos} todo={todo}setTodos={setTodos} text={todo.text} key={todo.id}/>
        ))}
      </div>
  )
}

export default TodoList;
import React from 'react'

const Todo = ({text, todos, todo, setTodos}) => {
    const deleteHandler =()=>{
        setTodos(todos.filter((el)=> el.id !== todo.id));
    }

    const completeHandler =()=> {
        setTodos(todos.map(item => {
            if (item.id === todo.id) {
                return {
                    ...item, 
                    completed: !item.completed
                };
            }
            return item;
        }))
    }
  return (
    <span>
          <ul>
            <li className={`todo-items ${todo.completed ? "completed" : ""}`}>{text}</li>
          </ul>

          <div>
            <button onClick={deleteHandler} className='todo-trash'><i className='fas fa-trash'></i></button>
            <button onClick={completeHandler} className='todo-check'><i className='fas fa-check'></i></button>
          </div>
    </span>
  )
}

export default Todo

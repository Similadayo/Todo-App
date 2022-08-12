import React from 'react'

const Form = ({setTextInput, todos, setTodos, textInput}) => {
  const inputHandler = (e) =>{
      console.log(e.target.value);
      setTextInput(e.target.value);
  }

  const submitTextHandler = (e) =>{
    e.preventDefault();
    setTodos([
      ...todos, 
        { text: textInput, completed:false, id: Math.random() * 100}
    ]);
    setTextInput('');
  }


  return (
      <form className='todo-form'>
        <input value={textInput} onChange={inputHandler} type="text" placeholder='Task to be done' className='todo-input' />
        <button onClick={submitTextHandler} className='todo-btn' type='submit'>
          <i className='fas fa-plus-square'></i>
        </button>

        <div className='todo-select'>
          <select name="Todos" className="todo-options">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="not-completed">Not Completed</option>
          </select>
        </div>
      </form>
  )
}

export default Form;

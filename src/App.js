import { useState } from 'react'
// import components
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div className='container'>
      <header className='header-todo'>
        <h1>Zoovie's Todo App</h1>
      </header>
      <Form todos={todos} textInput={textInput} setTodos={setTodos} setTextInput={setTextInput} />
      <TodoList setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;

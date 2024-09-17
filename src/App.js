import React, { useState } from 'react';

function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { text: inputValue, completed: false }]);
      setInputValue('');

      // incluir novos aditivos

      //asdasdasdasdad
    }
  };

  const handleToggleComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleDeleteTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto' }}>
      <h1>To-do List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Add a new task"
      />
      <button onClick={handleAddTodo} style={{ marginLeft: '10px' }}>
        Add
      </button>
      <ul style={{ listStyle: 'none', padding: '0' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ marginTop: '10px' }}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
                marginLeft: '10px',
              }}
            >
              {todo.text}
            </span>
            <button
              onClick={() => handleDeleteTodo(index)}
              style={{
                marginLeft: '10px',
                color: 'red',
                border: 'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

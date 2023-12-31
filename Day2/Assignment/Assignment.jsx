import React, { useState } from 'react';

const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const [todoList, setTodoList] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== '') {
      setTodoList([...todoList, inputValue]);
      setInputValue('');
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedList = [...todoList];
    updatedList.splice(index, 1);
    setTodoList(updatedList);
  };

  return (
    <div>
      <h1>TO-DO App</h1>
      <div>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todoList.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleDeleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

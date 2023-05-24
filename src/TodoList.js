import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleStatus } from './store';

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = React.useState('');

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      const todo = {
        name: newTodo,
        id: Date.now().toString(),
        status: 'pending',
      };
      dispatch(addTodo(todo));
      setNewTodo('');
    }
  };

  const handleToggleStatus = (id) => {
    dispatch(toggleStatus(id));
  };

  return (
    <div>
      <div>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.name}</span>
            <button onClick={() => handleToggleStatus(todo.id)}>
              {todo.status === 'pending' ? 'Completed' : 'Pending'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
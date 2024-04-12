import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  return (
    <div>
      {todoList.length !== 0
        ? todoList.map((task) => <TodoItem key={task.id} todo={task} />)
        : 'notodoList'}
    </div>
  );
}

export default AppContent;

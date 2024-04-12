import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  const filterStatus = useSelector((state) => state.todo.filterStatus);
  const sortedTodoList = todoList.filter((todo) => {
    if (filterStatus === 'All') {
      return todoList;
    }
    return todo.status === filterStatus;
  });

  return (
    <div>
      {sortedTodoList.length !== 0
        ? sortedTodoList.map((task) => <TodoItem key={task.id} todo={task} />)
        : 'notodoList'}
    </div>
  );
}

export default AppContent;

import React from 'react';
import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';

function AppContent() {
  const todoList = useSelector((state) => state.todo.todoList);
  return (
    <div>
      {todoList.length !== 0
        ? todoList.map((task) => (
            <TodoItem
              key={task.id}
              title={task.title}
              status={task.status}
              time={task.time}
            />
          ))
        : 'notodoList'}
    </div>
  );
}

export default AppContent;

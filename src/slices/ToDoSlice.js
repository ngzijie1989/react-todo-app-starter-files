import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
};

const initialValue = {
  todoList: getInitialTodo(),
};

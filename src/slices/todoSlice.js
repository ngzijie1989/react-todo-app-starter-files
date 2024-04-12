import { createSlice } from '@reduxjs/toolkit';

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
  if (localTodoList) {
    return JSON.parse(localTodoList);
  }
  window.localStorage.setItem('todoList', JSON.stringify([]));
  return [];
};

const initialValue = {
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
    addTodo: (state, action) => {
      state.todoList.push(action.payload);
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        todoListArr.push({ ...action.payload });
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
      } else {
        window.localStorage.setItem(
          'todoList',
          JSON.stringify([action.payload])
        );
      }
    },
    deleteTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        const deleteItem = todoListArr.find(
          (todo) => todo.id === action.payload
        );
        if (deleteItem) {
          const newTodoList = todoListArr.filter(
            (todo) => todo.id !== action.payload
          );
          window.localStorage.setItem('todoList', JSON.stringify(newTodoList));
          state.todoList = newTodoList;
        }
      }
    },
    editTodo: (state, action) => {
      const todoList = window.localStorage.getItem('todoList');
      if (todoList) {
        const todoListArr = JSON.parse(todoList);
        const editItem = todoListArr.find(
          (todo) => todo.id === action.payload.todo.id
        );
        if (editItem) {
          editItem.status = action.payload.status;
          editItem.title = action.payload.title;
        }
        window.localStorage.setItem('todoList', JSON.stringify(todoListArr));
        state.todoList = todoListArr;
      }
    },
  },
});

export const { addTodo } = todoSlice.actions;
export const { deleteTodo } = todoSlice.actions;
export const { editTodo } = todoSlice.actions;
export default todoSlice.reducer;

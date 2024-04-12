import React, { useState } from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import toast from 'react-hot-toast';
import TodoModal from './TodoModal';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';
import { deleteTodo } from '../slices/todoSlice';

function TodoItem({ todo }) {
  const dispatch = useDispatch();
  const [updateModalOpen, setUpdateModalOpen] = useState(false);

  const handleDelete = (e) => {
    e.preventDefault();
    dispatch(deleteTodo(todo.id));
    toast.error('Task has been deleted');
  };

  const handleEdit = (e) => {
    e.preventDefault();
    setUpdateModalOpen(true);
  };

  return (
    <div>
      <TodoModal
        modal={updateModalOpen}
        setModal={setUpdateModalOpen}
        type="Edit"
        todo={todo}
      />
      <div className={styles.item}>
        <div className={styles.todoDetails}>
          <div className={styles.text}>
            <p
              className={getClasses([
                styles.todoText,
                todo.status === 'complete' && styles['todoText--completed'],
              ])}
            >
              {todo.title}
            </p>
            <p className={styles.time}>
              {format(new Date(todo.time), 'p, MM/dd/yyyy')}
            </p>
          </div>
        </div>
        <div className={styles.todoActions}>
          <div
            className={styles.icon}
            onClick={handleDelete}
            onKeyDown={handleDelete}
            tabIndex={0}
            role="button"
          >
            <FontAwesomeIcon icon={faXmark} />
          </div>
          <div
            className={styles.icon}
            onClick={handleEdit}
            onKeyDown={handleEdit}
            tabIndex={0}
            role="button"
          >
            <FontAwesomeIcon icon={faPenToSquare} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';
import { addTodo, editTodo } from '../slices/todoSlice';

function TodoModal({ type, modal, setModal, todo }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Incomplete');

  const dispatch = useDispatch();
  const toastSuccess = () => toast.success('Task has been added successfully');
  const toastEdit = () => toast.success('Task has been edited successfully');

  useEffect(() => {
    if (type === 'Edit') {
      setTitle(todo.title);
      setStatus(todo.status);
    } else {
      setTitle('');
      setStatus('Incomplete');
    }
  }, [type, todo, modal]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title === '') {
      toast.error('Please type in a title');
    } else if (type === 'Add') {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        })
      );
      toastSuccess();
      setModal(false);
    } else if (type === 'Edit') {
      const { id } = todo;
      console.log(id);
      dispatch(editTodo({ todo, id, title, status }));
      toastEdit();
      setModal(false);
    }
  };

  return (
    modal && (
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div
            className={styles.closeButton}
            onClick={() => setModal(false)}
            onKeyDown={() => setModal(false)}
            tabIndex={0}
            role="button"
          >
            <FontAwesomeIcon icon={faTimes} aria-label="modal" />
          </div>
          <form className={styles.form}>
            <h1 className={styles.formTitle}>
              {type === 'Add' ? 'Add Task' : 'Edit Task'}
            </h1>
            <label htmlFor="title">
              Title
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>

            <label htmlFor="status">
              Status
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="Incomplete">Incomplete</option>
                <option value="Complete">Complete</option>
              </select>
            </label>
            <div className={styles.buttonContainer}>
              <div
                onClick={handleSubmit}
                onKeyDown={handleSubmit}
                tabIndex={0}
                role="button"
              >
                <Button type="submit" variant="primary">
                  {type === 'Add' ? 'Add Task' : 'Edit Task'}
                </Button>
              </div>

              <div
                onClick={() => setModal(false)}
                onKeyDown={() => setModal(false)}
                tabIndex={0}
                role="button"
              >
                <Button type="button" variant="secondary">
                  Cancel
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  );
}

export default TodoModal;

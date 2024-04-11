import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';
import toast from 'react-hot-toast';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';
import { addTodo } from '../slices/todoSlice';

function TodoModal({ modal, setModal }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Incomplete');

  const dispatch = useDispatch();
  const toastSuccess = () => toast.success('Task has been added successfully');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && status) {
      dispatch(
        addTodo({
          id: uuid(),
          title,
          status,
          time: new Date().toLocaleString(),
        })
      );
    }
    toastSuccess();
    setModal(false);
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
            <FontAwesomeIcon icon={faTimes} />
          </div>
          <form className={styles.form}>
            <h1 className={styles.formTitle}>Add Task</h1>
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
                  Add Task
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

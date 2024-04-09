import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/modules/modal.module.scss';
import Button from './Button';

function TodoModal({ modal, setModal }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('Incomplete');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ title, status });
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

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/modules/modal.module.scss';

function TodoModal() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.closeButton}>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <form className={styles.form}>
          <h1 className={styles.formTitle}>Add Task</h1>
          <label htmlFor="title">
            Title
            <input type="text" id="title" />
          </label>

          <label htmlFor="status">
            Status
            <select id="status">
              <option value="Incomplete">Incomplete</option>
              <option value="complete">Complete</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  );
}

export default TodoModal;

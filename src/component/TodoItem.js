import React from 'react';
import { format } from 'date-fns';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/modules/todoItem.module.scss';
import { getClasses } from '../utils/getClasses';

function TodoItem({ title, status, time }) {
  const handleDelete = () => {};

  const handleEdt = () => {};

  return (
    <div className={styles.item}>
      <div className={styles.todoDetails}>
        <div className={styles.text}>
          <p
            className={getClasses([
              styles.todoText,
              status === 'complete' && styles['todoText--completed'],
            ])}
          >
            {title}
          </p>
          <p className={styles.time}>
            {format(new Date(time), 'p, MM/dd/yyyy')}
          </p>
        </div>
      </div>
      <div className={styles.todoActions}>
        <div className={styles.icon} onClick={handleDelete}>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div className={styles.icon} onClick={handleEdit}>
          <FontAwesomeIcon icon={faPenToSquare} />
        </div>
      </div>
    </div>
  );
}

export default TodoItem;

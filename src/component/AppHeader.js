import React from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';

function AppHeader() {
  return (
    <div>
      <div className={styles.appHeader}>
        <Button variant="primary" type="submit">
          Add Task
        </Button>
        <SelectButton id="status">
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </SelectButton>
      </div>
      <TodoModal />
    </div>
  );
}

export default AppHeader;

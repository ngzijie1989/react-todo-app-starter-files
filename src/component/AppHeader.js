import React, { useState } from 'react';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';

function AppHeader() {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <div className={styles.appHeader}>
        <div
          onClick={() => setModal(true)}
          onKeyDown={() => setModal(true)}
          tabIndex={0}
          role="button"
        >
          <Button variant="primary" type="button">
            Add Task
          </Button>
        </div>
        <SelectButton id="status">
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </SelectButton>
      </div>
      <TodoModal modal={modal} setModal={setModal} />
    </div>
  );
}

export default AppHeader;

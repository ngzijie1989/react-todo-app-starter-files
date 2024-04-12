import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button, { SelectButton } from './Button';
import styles from '../styles/modules/app.module.scss';
import TodoModal from './TodoModal';
import { filterTodo } from '../slices/todoSlice';

function AppHeader() {
  const [modal, setModal] = useState(false);
  const initialFilterStatus = useSelector((state) => state.todo.initialvalue);
  const [filterStatus, setFilterStatus] = useState(initialFilterStatus);

  const dispatch = useDispatch();

  const handleFilterChange = (e) => {
    setFilterStatus(e.target.value);
    dispatch(filterTodo(e.target.value));
  };

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
        <div
          onChange={handleFilterChange}
          onKeyDown={handleFilterChange}
          tabIndex={0}
          role="button"
        >
          <SelectButton id="status" value={filterStatus}>
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Incomplete">Incomplete</option>
          </SelectButton>
        </div>
      </div>
      <TodoModal modal={modal} setModal={setModal} type="Add" />
    </div>
  );
}

export default AppHeader;

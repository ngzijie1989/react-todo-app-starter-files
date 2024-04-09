import React from 'react';
import style from '../styles/modules/button.module.scss';
import { getClasses } from '../utils/getClasses';

// variant = primary or secondary
// type = submit or button
function Button({ children, type, variant }) {
  return (
    <button
      className={getClasses([style.button, style[`button--${variant}`]])}
      type={type === 'submit' ? 'submit' : 'button'}
    >
      {children}
    </button>
  );
}

function SelectButton({ children }) {
  return (
    <div>
      <select className={getClasses([style.button, style.button__select])}>
        {children}
      </select>
    </div>
  );
}

export default Button;
export { SelectButton };

import React from 'react';
import style from './ButtonWindow.module.css';

export const ButtonWindow = ({
  name = 'name',
  action = 'unknow',
  title = 'КНОПКА',
}) => {
  // name - любой
  // action - confirm или cancel
  // title - любое
  const addStyle = action === 'добавить' ? style.confirm : style.cancel;
  return (
    <div>
      <button
        type="submit"
        name={name}
        className={[style.button, addStyle].join(' ')}
      >
        {title}
      </button>
    </div>
  );
};

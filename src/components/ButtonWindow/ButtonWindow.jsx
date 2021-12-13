import React from 'react';
import style from './ButtonWindow.module.css';

export const ButtonWindow = ({
  name = 'name',
  action = 'unknow',
  title = 'КНОПКА',
  onClick,
}) => {
  // name - любой
  // action - confirm или cancel
  // title - любое

  const handleClick = e => {
    console.log('e', e);

    if (typeof onClick === 'function') onClick(e);
  };
  const addStyle = action === 'добавить' ? style.confirm : style.cancel;
  return (
    <div>
      <button
        type="submit"
        name={name}
        onClick={handleClick}
        className={[style.button, addStyle].join(' ')}
      >
        {title}
      </button>
    </div>
  );
};

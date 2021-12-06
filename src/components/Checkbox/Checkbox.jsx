import React from 'react';
import style from './Checkbox.module.css';

export const Checkbox = ({
  id,
  name,
  checked,
  onChange,
  onBlur,
  value,
  className,
}) => {
  return (
    <div className={[style.switch_box, style.box].join(' ')}>
      <input
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        type="checkbox"
        className={style.switch}
      />
      <div className={style.cross}></div>
    </div>
  );
};

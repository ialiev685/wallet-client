import React, { useState, useEffect } from 'react';
import style from './SelectCategory.module.css';
import { ReactComponent as ArrowIcon } from './arrow.svg';

export const SelectCategory = ({ list }) => {
  const [hiddenList, setHiddenList] = useState(true);
  const [currentValue, setCurrentValue] = useState({
    value: 0,
    text: 'Выберите категорию',
  });
  const [currentColor, setCurrentColor] = useState(false);

  useEffect(() => {
    if (!hiddenList) {
      window.addEventListener('keydown', function handleClick(e) {
        if (e.code === 'Escape') {
          setHiddenList(true);
          window.removeEventListener('keydown', handleClick);
        }
      });
    }
  }, [hiddenList]);

  const handleShowList = e => {
    setHiddenList(prevState => !prevState);
  };

  const handleChoose = e => {
    const newCurrentValue = {
      value: e.target.dataset.value,
      text: e.target.textContent,
    };

    if (newCurrentValue.value !== 0) setCurrentColor(true);
    setCurrentValue(newCurrentValue);
    setHiddenList(true);
  };

  return (
    <div className={style.select}>
      <div onClick={handleShowList} className={style.select__header}>
        <span
          className={[
            style.select__current,
            currentColor && style.select__currentCategory,
          ].join(' ')}
          data-value={currentValue.value}
        >
          {currentValue.text}
        </span>
        <span
          className={[
            style.select__arrowIcon,
            !hiddenList && style.select__arrowIcon__turn,
          ].join(' ')}
        >
          <ArrowIcon width="18" height="18" />
        </span>
      </div>

      <div
        className={[style.select__body, hiddenList && style.isHidden].join(' ')}
      >
        <div className={style.wrapperItems}>
          {list.map(({ id, name, index }) => (
            <div
              key={id}
              className={style.select__item}
              data-value={index}
              onClick={handleChoose}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

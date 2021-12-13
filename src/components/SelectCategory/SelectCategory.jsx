import React, { useState, useEffect, useRef } from 'react';
import style from './SelectCategory.module.css';
import { ReactComponent as ArrowIcon } from './arrow.svg';

export const SelectCategory = props => {
  const { value, list, onChange, id = 'unknow', name = 'unknow' } = props;

  const [hiddenList, setHiddenList] = useState(true);
  const [currentValue, setCurrentValue] = useState({
    target: { value: 0, text: 'Выберите категорию' },
  });
  const [currentColor, setCurrentColor] = useState(false);
  const wrapperRef = useRef();

  useEffect(() => {
    if (value === 'Выберите категорию') {
      setCurrentValue({ target: { value: 0, text: 'Выберите категорию' } });
      setCurrentColor(false);
    }
  }, [value]);

  useEffect(() => {
    if (!hiddenList) {
      document.addEventListener('mousedown', handleClickOutside);

      window.addEventListener('keydown', function handleClick(e) {
        if (e.code === 'Escape') {
          setHiddenList(true);
          window.removeEventListener('keydown', handleClick);
        }
      });
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [hiddenList]);

  const handleClickOutside = e => {
    if (!wrapperRef.current.contains(e.target)) {
      setHiddenList(true);
    }
  };

  const handleShowList = e => {
    setHiddenList(prevState => !prevState);
  };

  const handleChoose = e => {
    const newCurrentValue = {
      target: {
        value: e.target.dataset.value,
        text: e.target.textContent,
        id,
        name,
      },
    };

    if (newCurrentValue.target.value !== 0) setCurrentColor(true);
    setCurrentValue(newCurrentValue);
    setHiddenList(true);

    if (typeof onChange === 'function') onChange(newCurrentValue);
  };

  return (
    <div ref={wrapperRef} className={style.select}>
      <div onClick={handleShowList} className={style.select__header}>
        <span
          className={[
            style.select__current,
            currentColor && style.select__currentCategory,
          ].join(' ')}
          data-value={currentValue.target.value}
        >
          {currentValue.target.text}
      
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
          {list.map(({ _id, name }) => (
            <div
              key={_id}
              className={style.select__item}
              data-value={_id}
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

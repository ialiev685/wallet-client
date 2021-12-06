import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { createPortal } from 'react-dom';
import * as Yup from 'yup';
//дата
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
//иконка
import { ReactComponent as DateIcon } from 'icons/date-icon.svg';
import { ReactComponent as CrossIcon } from 'icons/cross-close.svg';
//сумма
import NumberFormat from 'react-number-format';
//чекбокс
import { Checkbox } from 'components/Checkbox';
import style from './ModalTransaction.module.css';
//селект
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './GlobalCssSlider.css';
//кнопка
import { ButtonWindow } from 'components/ButtonWindow';
//модалка
import { useDispatch } from 'react-redux';
import { modalAction } from 'redux/modal';

const validation = Yup.object({
  type_pay: Yup.boolean(),
  category: Yup.number()
    .min(1, 'Выбери категорию от 1 до 7 ')
    .when('type_pay', {
      is: false,
      then: Yup.number().min(0),
    }),
  amount: Yup.number()
    .min(0.01, 'Минимальная сумма 0.01')
    .max(999999999, 'Максимальная сумма 999999')
    .required('Минимальная сумма 0.01'),
  date: Yup.date().required(),
  discription: Yup.mixed(),
});

//const rootModal = document.querySelector('#root-modal');

export const ModalTransaction = (/*{ onClose }*/) => {
  /*useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      onClose();
    }
  };*/
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalAction.closeModal());
  };

  const formik = useFormik({
    initialValues: {
      type_pay: true,
      category: 0,
      amount: '',
      date: new Date(),
      discription: '',
    },
    validationSchema: validation,

    onSubmit: values => {
      console.log(values);
    },
  });

  let inputDateProps = {
    id: 'date',
    name: 'date',
    className: style.Modal__date,
  };
  return (//createPortal(
    // <div className={style.Overlay}>
      <div className={style.Modal}>
        <h1 className={style.Modal__title}>Добавить транзакцию</h1>
        <form onSubmit={formik.handleSubmit} className={style.Modal__form}>
          <div className={style.Modal__type}>
            <Checkbox
              id="type_pay"
              name="type_pay"
              type="checkbox"
              checked={formik.values.type_pay}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.type_pay}
            />
            <label
              className={[
                style.Model__label,
                !formik.values.type_pay && style.Modal__income,
              ].join(' ')}
              htmlFor="type_pay"
            >
              Доход
            </label>
            <label
              htmlFor="type_pay"
              className={[
                style.Model__label,
                formik.values.type_pay && style.Modal__expenses,
              ].join(' ')}
            >
              Расход
            </label>
          </div>

          {formik.values.type_pay && (
            <div className={style.Modal__wrapperSelect}>
              <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
                <Select
                  // labelId="category"
                  id="category"
                  value={formik.values.category}
                  name="category"
                  onChange={formik.handleChange}
                  className={[style.Modal__input, style.Modal__category].join(
                    ' ',
                  )}
                >
                  <MenuItem disabled value="0">
                    Выберите категорию
                  </MenuItem>
                  <MenuItem value={1}>Основной</MenuItem>
                  <MenuItem value={2}>Еда</MenuItem>
                  <MenuItem value={3}>Авто</MenuItem>
                  <MenuItem value={4}>Развитие</MenuItem>
                  <MenuItem value={5}>Дети</MenuItem>
                  <MenuItem value={6}>Дом</MenuItem>
                  <MenuItem value={7}>Образование</MenuItem>
                  <MenuItem value={8}>Остальное</MenuItem>
                </Select>
              </FormControl>
              {formik.touched.category && formik.errors.category ? (
                <div className={style.Modal__errorSelect}>
                  {formik.errors.category}
                </div>
              ) : null}
            </div>
          )}

          <div className={style.Modal__wrapperAmountDate}>
            <div className={style.Modal__wrapperAmount}>
              <NumberFormat
                id="amount"
                className={[style.Modal__input, style.Modal__amount].join(' ')}
                thousandSeparator={true}
                format="### ### ###"
                autoComplete="off"
                placeholder="0.00"
                displayType="input"
                type="text"
                value={formik.values.amount}
                onValueChange={(values, sourceInfo) => {
                  const { event } = sourceInfo;
                  formik.handleChange(event);
                }}
                thousandsGroupStyle="thousand"
              />
              {formik.touched.amount && formik.errors.amount ? (
                <div className={style.Modal__errorAmount}>
                  {formik.errors.amount}
                </div>
              ) : null}
            </div>

            <div
              className={[
                style.Modal__input,
                style.Modal__input__boxRelative,
              ].join(' ')}
            >
              <DateIcon
                width="18"
                height="20"
                className={style.Modal__iconDate}
              />
              <Datetime
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                inputProps={inputDateProps}
                initialValue={formik.values.date}
                closeOnSelect={true}
              />
            </div>
          </div>

          <textarea
            id="discription"
            className={[style.Modal__input, style.Modal__input__hight].join(
              ' ',
            )}
            name="discription"
            rows="2"
            maxLength="60"
            placeholder="Комментарий"
            autoComplete="off"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.discription}
          ></textarea>
          {formik.touched.discription && formik.errors.discription ? (
            <div>{formik.errors.discription}</div>
          ) : null}

          <ButtonWindow
            className={style.Modal__button}
            title={'добавить'}
            action={'добавить'}
          />
        </form>
        <ButtonWindow onClick={handleClick} title={'отмена'} />
        <CrossIcon onClick={handleClick} className={style.Modal__close} />
      </div>
    //</div>,
    //rootModal,
  );
};

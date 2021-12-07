import React, { useEffect } from 'react';
import { useFormik } from 'formik';

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
import { fetchTransactionOperation } from 'redux/finance';
import { useDispatch } from 'react-redux';
import { modalAction } from 'redux/modal';

const validation = Yup.object({
  transactionType: Yup.boolean(),
  // category: Yup.number()
  //   .min(1, 'Выбери категорию от 1 до 7 ')
  //   .when('type_pay', {
  //     is: false,
  //     then: Yup.number().min(0),
  //   }),

  category: Yup.mixed()
    .notOneOf(['Выберите категорию'], 'Выберите категорию')
    .when('transactionType', {
      is: false,
      then: Yup.mixed().oneOf([
        'Выберите категорию',
        'Основной',
        'Еда',
        'Авто',
        'Дети',
        'Дом',
        'Образование',
        'Остальное',
      ]),
    }),

  sum: Yup.number()
    .min(0.01, 'Минимальная сумма 0.01')
    .max(999999999, 'Максимальная сумма 999 999 999')
    .required('Минимальная сумма 0.01'),
  date: Yup.date().required(),
  discription: Yup.mixed(),
});

export const ModalTransaction = (/*{ onClose }*/) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(modalAction.closeModal());
  };

  const formik = useFormik({
    initialValues: {
      transactionType: true,
      category: 'Выберите категорию',
      sum: '',
      date: new Date(),
      comment: '',
    },
    validationSchema: validation,

    onSubmit: (values, { resetForm }) => {
      const normalizeDate = [
        values.date.getDate(),
        values.date.getMonth() + 1,
        values.date.getFullYear(),
      ].join('.');

      // values.transactionType = String(values.transactionType);
      values.sum = Number(values.sum);
      values.date = normalizeDate;

      dispatch(fetchTransactionOperation(values));
      resetForm();
    },
  });

  let inputDateProps = {
    id: 'date',
    name: 'date',
    className: style.Modal__date,
  };
  return (
    <div className={style.Modal}>
      <h1 className={style.Modal__title}>Добавить транзакцию</h1>
      <form onSubmit={formik.handleSubmit} className={style.Modal__form}>
        <div className={style.Modal__type}>
          <Checkbox
            id="transactionType"
            name="transactionType"
            type="checkbox"
            checked={formik.values.transactionType}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.transactionType}
          />
          <label
            className={[
              style.Model__label,
              !formik.values.transactionType && style.Modal__income,
            ].join(' ')}
            htmlFor="transactionType"
          >
            Доход
          </label>
          <label
            htmlFor="transactionType"
            className={[
              style.Model__label,
              formik.values.transactionType && style.Modal__expenses,
            ].join(' ')}
          >
            Расход
          </label>
        </div>

        {formik.values.transactionType && (
          <div className={style.Modal__wrapperSelect}>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
              <Select
                id="category"
                value={formik.values.category}
                name="category"
                onChange={formik.handleChange}
                className={[style.Modal__input, style.Modal__category].join(
                  ' ',
                )}
              >
                <MenuItem disabled value="Выберите категорию">
                  Выберите категорию
                </MenuItem>
                <MenuItem value="Основной">Основной</MenuItem>
                <MenuItem value="Еда">Еда</MenuItem>
                <MenuItem value="Авто">Авто</MenuItem>
                <MenuItem value="Развитие">Развитие</MenuItem>
                <MenuItem value="Дети">Дети</MenuItem>
                <MenuItem value="Дом">Дом</MenuItem>
                <MenuItem value="Образование">Образование</MenuItem>
                <MenuItem value="Остальное">Остальное</MenuItem>
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
              id="sum"
              name="sum"
              className={[style.Modal__input, style.Modal__amount].join(' ')}
              thousandSeparator={true}
              autoComplete="off"
              placeholder="0.00"
              displayType="input"
              type="text"
              value={formik.values.sum}
              allowNegative={true}
              defaultValue={0}
              isNumericString={true}
              onValueChange={(values, sourceInfo) => {
                const e = {
                  target: {
                    value: values.value,
                    id: 'sum',
                    name: 'sum',
                  },
                };

                formik.handleChange(e);
              }}
              thousandsGroupStyle="thousand"
            />
            {formik.touched.sum && formik.errors.sum ? (
              <div className={style.Modal__errorAmount}>
                {formik.errors.sum}
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
          id="comment"
          className={[style.Modal__input, style.Modal__input__hight].join(' ')}
          name="comment"
          rows="2"
          maxLength="60"
          placeholder="Комментарий"
          autoComplete="off"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.comment}
        ></textarea>
        {formik.touched.comment && formik.errors.comment ? (
          <div>{formik.errors.comment}</div>
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
  );
};

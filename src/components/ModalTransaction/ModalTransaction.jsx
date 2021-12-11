import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
// import { ToastifyError } from 'components/ToastyfyError/ToastifyError';
import 'react-toastify/dist/ReactToastify.css';
//селекторы
import { financeSelectors } from 'redux/finance';
import 'react-toastify/dist/ReactToastify.css';
import * as Yup from 'yup';
//дата
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
//иконка
import { ReactComponent as DateIcon } from 'images/icons/date-icon.svg';
import { ReactComponent as CrossIcon } from 'images/icons/cross-close.svg';

//сумма
import NumberFormat from 'react-number-format';
//чекбокс
import { Checkbox } from 'components/Checkbox';
import style from './ModalTransaction.module.css';
//селект
import { SelectCategory } from 'components/SelectCategory';
//кнопка
import { ButtonWindow } from 'components/ButtonWindow';
//модалка
import {
  fetchTransactionOperation,
  fetchTransactionCategory,
} from 'redux/finance';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from 'redux/modal';

const validation = Yup.object({
  transactionType: Yup.boolean(),

  category: Yup.mixed()
    .notOneOf(['Выберите категорию'], 'Выберите категорию')
    .when('transactionType', {
      is: false,
      then: Yup.mixed().oneOf(['Выберите категорию']),
    }),

  sum: Yup.number()
    .min(0.01, 'Минимальная сумма 0.01')
    .max(999999999, 'Максимальная сумма 999 999 999')
    .required('Минимальная сумма 0.01'),
  date: Yup.date().required(),
  discription: Yup.mixed(),
});

//приводит дату в нормальный формат

// const norlmalizeData = value => {
//   const normalizeFormatMonth =
//     value.getMonth() < 10 ? '0' + (value.getMonth() + 1) : value.getMonth() + 1;

//   const normalizeFormatDate =
//     value.getDate() < 10 ? '0' + value.getDate() : value.getDate();
//   const normalizeDate = [
//     normalizeFormatMonth,
//     normalizeFormatDate,
//     value.getFullYear(),
//   ].join('.');
//   return normalizeDate;
// };

export const ModalTransaction = () => {
  const dispatch = useDispatch();
  const isError = useSelector(financeSelectors.getIsError);
  const errorMessage = useSelector(financeSelectors.getErrorMessage);
  const listCategories = useSelector(financeSelectors.getListCategories);

  const handleClick = () => {
    dispatch(modalAction.closeModal());
  };

  useEffect(() => {
    if (isError) {
      toast.error(errorMessage, {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [errorMessage, isError]);

  useEffect(() => {
    dispatch(fetchTransactionCategory());
  }, [dispatch]);

  const formik = useFormik({
    initialValues: {
      transactionType: true,
      sum: '',
      category: 'Выберите категорию',
      date: new Date(),
      comment: '',
    },
    validationSchema: validation,

    onSubmit: (values, { resetForm }) => {
      values.sum = Number(values.sum);
      // values.date = norlmalizeData(values.date);
      values.date = values.date.toString();
      if (!values.transactionType) delete values.category;
      if (!values.comment) delete values.comment;
      console.log(values);
      dispatch(fetchTransactionOperation(values));

      resetForm();
    },
  });

  let inputDateProps = {
    id: 'date',
    name: 'date',
    className: style.Modal__date,
    onChange: {},
  };
  return (
    <div className={style.Modal}>
      {isError && <ToastContainer />}
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
            <SelectCategory
              list={listCategories}
              onChange={formik.handleChange}
              id={'category'}
              name={'category'}
              value={formik.values.category}
            />
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
              onChange={value => {
                const e = {
                  target: {
                    value: value._d,
                    id: 'date',
                    name: 'date',
                  },
                };
                formik.handleChange(e);
              }}
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

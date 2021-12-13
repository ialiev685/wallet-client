import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//селекторы
import { financeSelectors } from 'redux/finance';
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
// import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './GlobalCssSlider.css';
//кнопка
import { ButtonWindow } from 'components/ButtonWindow';
//модалка
import { fetchTransactionOperation } from 'redux/finance';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction } from 'redux/modal';
// категории
import {
  fetchCatgories,
  fetchAddCatgories,
} from '../../redux/finance/categories-opeations';
// import { ApiCategoriesTransactions, ApiAddCategorieTransactions } from '../../services/categories-api';

//нормализация даты

const arrayMainCategory = [
  '61ad865bc505a94bdf06939f',
  '61ad8719c505a94bdf0693a0',
  '61ad87a7c505a94bdf0693a2',
  '61ad8892c505a94bdf0693a4',
  '61ad881ac505a94bdf0693a3',
  '61ad8aadc505a94bdf0693a5',
  '61ad8b50c505a94bdf0693a7',
];

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
      then: Yup.mixed().oneOf(['Выберите категорию', ...arrayMainCategory]),
    }),

  sum: Yup.number()
    .min(0.01, 'Минимальная сумма 0.01')
    .max(999999999, 'Максимальная сумма 999 999 999')
    .required('Минимальная сумма 0.01'),
  date: Yup.date().required(),
  discription: Yup.mixed(),
});

//приводит дату в нормальный формат
function norlmalizeData(value) {
  const normalizeFormatMonth =
    value.getMonth() < 10 ? '0' + (value.getMonth() + 1) : value.getMonth() + 1;

  const normalizeFormatDate =
    value.getDate() < 10 ? '0' + value.getDate() : value.getDate();
  const normalizeDate = [
    normalizeFormatMonth,
    normalizeFormatDate,
    value.getFullYear(),
  ].join('.');
  return normalizeDate;
}

export const ModalTransaction = () => {
  const dispatch = useDispatch();
  const isError = useSelector(financeSelectors.getIsError);
  const errorMessage = useSelector(financeSelectors.getErrorMessage);

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

  const formik = useFormik({
    initialValues: {
      transactionType: true,
      sum: '',
      date: new Date(),
      category: 'Выберите категорию',
      comment: '',
    },
    validationSchema: validation,

    onSubmit: async (values, { resetForm }) => {
      console.log('validation', validation);
      await console.log(values);
      console.log(values.category);
      console.log(values.myNameCategory);
      values.sum = Number(values.sum);
      values.date = norlmalizeData(values.date);

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

  const [isActive, setActive] = useState(false);

  const handleMyCategory = ev => {
    // console.log("handleMyCategory ~ ev", ev?.target.innerText);
    if (isActive && !ev) {
      setActive(false);
    }

    if (ev?.target.innerText === 'Свой вариант') {
      setActive(true);
    } else {
      setActive(false);
    }
  };

  const onChangeInputMyCategory = async ev => {
    formik.handleChange(ev);
    console.log(123);
    console.log(ev.target.value);
    // const res = await dispatch(fetchCatgories());
    // console.log("onChangeInputMyCategory ~ res", res)
  };

  const [categoies, setCategoies] = useState([]);

  const getAllCategories = async () => {
    const result = await dispatch(fetchCatgories());
    console.log('getAllCategories ~ result.payload', result.payload);
    setCategoies(result.payload);
    return result.payload;
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

                {categoies.map(el => {
                  console.log(el);
                  return (
                    <MenuItem value={el._id} onClick={handleMyCategory}>
                      {el.name}
                    </MenuItem>
                  );
                })}
                <MenuItem
                  value="61ad865bc505a94bdf06939f"
                  onClick={handleMyCategory}
                >
                  Основной
                </MenuItem>
                <MenuItem
                  value="61ad87a7c505a94bdf0693a2"
                  onClick={handleMyCategory}
                >
                  Еда
                </MenuItem>
                <MenuItem
                  value="61ad881ac505a94bdf0693a3"
                  onClick={handleMyCategory}
                >
                  Авто
                </MenuItem>
                <MenuItem
                  value="61ad8b50c505a94bdf0693a7"
                  onClick={handleMyCategory}
                >
                  Развитие
                </MenuItem>
                <MenuItem
                  value="61ad8719c505a94bdf0693a0"
                  onClick={handleMyCategory}
                >
                  Дети
                </MenuItem>
                <MenuItem
                  value="61ad8892c505a94bdf0693a4"
                  onClick={handleMyCategory}
                >
                  Дом
                </MenuItem>
                <MenuItem
                  value="61ad8aadc505a94bdf0693a5"
                  onClick={handleMyCategory}
                >
                  Образование
                </MenuItem>
                <MenuItem value="Остальное">Остальное</MenuItem>
                <MenuItem onClick={handleMyCategory} value="myCategory">
                  Свой вариант
                </MenuItem>
              </Select>
            </FormControl>
            <div className={isActive ? ' ' : `${style.isHiden}`}>
              <textarea
                id="myNameCategory"
                className={[style.Modal__input, style.Modal__input__hight].join(
                  ' ',
                )}
                name="myNameCategory"
                rows="2"
                maxLength="60"
                placeholder="Введите название категории"
                autoComplete="off"
                type="text"
                onChange={onChangeInputMyCategory}
                onBlur={formik.handleBlur}
                value={formik.values.myNameCategory}
              ></textarea>
            </div>
            {formik.touched.myNameCategory && formik.errors.myNameCategory ? (
              <div className={style.Modal__errorSelect}>
                {formik.errors.myNameCategory}
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

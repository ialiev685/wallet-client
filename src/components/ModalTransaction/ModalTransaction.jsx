import React from 'react';
import { useFormik } from 'formik';
import { createPortal } from 'react-dom';
import * as Yup from 'yup';
//дата
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
//сумма
import NumberFormat from 'react-number-format';
//чекбокс
import { Checkbox } from 'components/Checkbox';
import style from './ModalTransaction.module.css';
//селект
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './GlobalCssSlider.css';

const validation = Yup.object({
  type: Yup.boolean(),
  amount: Yup.number()
    .min(0.01, 'Minimum amount 0.01')
    .max(999999999, 'Maximum amount 999999')
    .required('Required'),
  date: Yup.date().required(),
  discription: Yup.mixed(),
});

const rootModal = document.querySelector('#root-modal');

export const ModalTransaction = () => {
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
      alert(JSON.stringify(values, null, 2));
    },
  });

  let inputDateProps = {
    id: 'date',
    name: 'date',
    className: style.Modal__input,
  };
  return createPortal(
    <div className={style.Overlay}>
      <div className={style.Modal}>
        <h1 className={style.Modal__title}>Добавить транзакцию</h1>
        <form onSubmit={formik.handleSubmit} className={style.Modal__form}>
          {/* <label htmlFor="firstName">First Name</label> */}
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
            <FormControl variant="standard" sx={{ m: 1, minWidth: 280 }}>
              {/* <InputLabel id="demo-simple-select-standard-label">
                Age
              </InputLabel> */}
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
                <MenuItem value="0">Выберите категорию</MenuItem>
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

            // <select
            //   id="category"
            //   className={[style.Modal__input, style.Modal__category].join(' ')}
            //   name="category"
            //   value={formik.values.category}
            //   onChange={formik.handleChange}
            // >
            // <option value="0">Выберите категорию</option>
            // <option value="1">Основной</option>
            // <option value="2">Еда</option>
            // <option value="3">Авто</option>
            // <option value="4">Развитие</option>
            // <option value="5">Дети</option>
            // <option value="6">Дом</option>
            // <option value="7">Образование</option>
            // <option value="8">Остальное</option>
            // </select>
          )}
          <NumberFormat
            id="amount"
            className={[style.Modal__input, style.Modal__date].join(' ')}
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
            <div>{formik.errors.amount}</div>
          ) : null}

          {/* <label htmlFor="lastName">Last Name</label> */}
          <Datetime
            // className={style.Modal__input}
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            inputProps={inputDateProps}
            initialValue={formik.values.date}
            closeOnSelect={true}
          />
          {/*id="date" name="date" value={formik.values.date}*/}
          <input
            id="discription"
            className={style.Modal__input}
            name="discription"
            autoComplete="off"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.discription}
          />
          {formik.touched.discription && formik.errors.discription ? (
            <div>{formik.errors.discription}</div>
          ) : null}

          <button type="submit">ДОБАВИТЬ</button>
        </form>

        <button type="button">ОТМЕНА</button>
      </div>
    </div>,
    rootModal,
  );
};

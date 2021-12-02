import React from 'react';
import { useFormik } from 'formik';
// import { createPortal } from 'react-dom';
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import NumberFormat from 'react-number-format';
import './checkbox.scss';

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
  };
  return (
    <div>
      <div>
        <h1>Добавить транзакцию</h1>
        <form onSubmit={formik.handleSubmit}>
          {/* <label htmlFor="firstName">First Name</label> */}
          <label htmlFor="">Доход</label>
          <input
            id="type_pay"
            name="type_pay"
            type="checkbox"
            checked={formik.values.type_pay}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.type_pay}
          />
          <label htmlFor="">Расход</label>
          {/* 
          <input
            id="amount"
            name="amount"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
          /> */}

          <NumberFormat
            id="amount"
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
            dateFormat="DD.MM.YYYY"
            timeFormat={false}
            inputProps={inputDateProps}
            initialValue={formik.values.date}
            closeOnSelect={true}
          />
          {/*id="date" name="date" value={formik.values.date}*/}
          <input
            id="discription"
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

          <button type="submit">Submit</button>
        </form>
        <div class="switch_box box_1">
          <input type="checkbox" className="switch_1" />
          <div className="cross"></div>
        </div>
      </div>
    </div>
  );
};

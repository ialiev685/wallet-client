import React from 'react';
import { useFormik } from 'formik';
// import { createPortal } from 'react-dom';
import * as Yup from 'yup';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

const validation = Yup.object({
  type: Yup.boolean(),
  amount: Yup.number()
    .min(0.01, 'Minimum amount 0.01')
    .max(999999, 'Maximum amount 999999')
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
      //   console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
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
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.firstName}
          />
          <label htmlFor="">Расход</label>

          <input
            id="amount"
            name="amount"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.amount}
          />
          {formik.touched.amount && formik.errors.amount ? (
            <div>{formik.errors.amount}</div>
          ) : null}

          {/* <label htmlFor="lastName">Last Name</label> */}
          <Datetime id="date" name="date" value={formik.values.date} />
          <input
            id="discription"
            name="discription"
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
      </div>
    </div>
  );
};

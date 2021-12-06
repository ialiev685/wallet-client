import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction, modalSelectors } from 'redux/modal';
import Modal from '../Modal';
import { ModalTransaction } from '../ModalTransaction';
import s from './ButtonAddTransactions.module.css';

function ButtonAddTransactions() {
  const showModal = useSelector(modalSelectors.getIsModal);
  const dispatch = useDispatch();

  const toggleModal = () => {
    dispatch(modalAction.openModal());
  };

  const { buttonContainer, button, span, rotateSpan } = s;

  return (
    <div className={buttonContainer}>
      <button className={button} type="button" onClick={() => toggleModal()}>
        <span className={span}></span>
        <span className={rotateSpan}></span>
      </button>

      {showModal && (
            <Modal>
              <ModalTransaction />
            </Modal>
          )}
    </div>
  );
}

export default ButtonAddTransactions;

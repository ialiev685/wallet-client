import { useState } from 'react';
import Modal from '../Modal';
import { ModalTransaction } from '../ModalTransaction';
import s from './ButtonAddTransactions.module.css';

function ButtonAddTransactions({ className = '' }) {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { buttonContainer, button, span, rotateSpan } = s;

  return (
    <>
      <button
        className={`${button} ${className}`}
        type="button"
        onClick={() => toggleModal()}
      >
        <span className={span}></span>
        <span className={rotateSpan}></span>
      </button>

      {showModal && (
        <Modal onToggleModal={toggleModal} showModal={showModal}>
          <ModalTransaction onClose={toggleModal} />
        </Modal>
      )}
    </>
  );
}

export default ButtonAddTransactions;

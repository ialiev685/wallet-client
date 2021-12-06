import { useState } from 'react';
import Modal from '../Modal';
import { ModalTransaction } from '../ModalTransaction';
import s from './ButtonAddTransactions.module.css';

function ButtonAddTransactions() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const { buttonContainer, button, span, rotateSpan } = s;

  return (
    <div className={buttonContainer}>
      <button className={button} type="button" onClick={() => toggleModal()}>
        <span className={span}></span>
        <span className={rotateSpan}></span>
      </button>

      {showModal && (
        <Modal onToggleModal={toggleModal} showModal={showModal}>
          <ModalTransaction onClose={toggleModal} />
        </Modal>
      )}
    </div>
  );
}

export default ButtonAddTransactions;

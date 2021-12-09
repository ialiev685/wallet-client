import { useDispatch, useSelector } from 'react-redux';
import { modalAction, modalSelectors } from 'redux/modal';
import Modal from '../Modal';
import { ModalTransaction } from '../ModalTransaction';
import s from './ButtonAddTransactions.module.css';

function ButtonAddTransactions({ className = '' }) {
  const showModal = useSelector(modalSelectors.getIsModal);
  const dispatch = useDispatch();

  const { buttonContainer, button, span, rotateSpan } = s;

  return (
    <div className={buttonContainer}>
      <button
        className={`${button} ${className}`}
        type="button"
        onClick={() => dispatch(modalAction.openModal())}
      >
        <span className={span}></span>
        <span className={rotateSpan}></span>
      </button>

      {showModal && (
        <Modal
          onCloseModal={() => dispatch(modalAction.closeModal())}
          showModal={showModal}
        >
          <ModalTransaction />
        </Modal>
      )}
    </div>
  );
}

export default ButtonAddTransactions;

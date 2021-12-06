import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useDispatch, useSelector } from 'react-redux';
import { modalAction, modalSelectors } from 'redux/modal';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#root-modal');

function Modal(props) {
  const { children } = props;

  const showModal = useSelector(modalSelectors.getIsModal);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        dispatch(modalAction.closeModal());
      }
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [dispatch, showModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(modalAction.closeModal());
    }
  };

  const { Overlay, Modal } = s;

  return createPortal(
    <div className={Overlay} onClick={handleBackdropClick}>
      <div className={Modal}>{children}</div>
    </div>,
    modalRoot,
  );
}

export default Modal;
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useSelector } from 'react-redux';
import { modalSelectors } from 'redux/modal';
import s from './Modal.module.css';

const modalRoot = document.querySelector('#root-modal');

function Modal(props) {
  const { children, onCloseModal, showModal } = props;

  console.log(onCloseModal)

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onCloseModal();
      }
    };

    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onCloseModal, showModal]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      onCloseModal();
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
import Modal from '../Modal';
import s from './LogoutModal.module.css';

function LogoutModal(props) {
  const { logoutHandler, showModal, toggleModal } = props;

  const { modalConatiner, modalTitle, button, modalButton } = s;

  return (
    <div>
      {showModal && (
        <Modal onCloseModal={toggleModal} showModal={showModal}>
          <div className={modalConatiner}>
            <h4 className={modalTitle}>Вы уверены, что хотите выйти?</h4>
            <div>
              <button
                className={button}
                type="button"
                onClick={() => logoutHandler()}
              >
                Да
              </button>

              <button
                className={modalButton}
                type="button"
                onClick={() => toggleModal()}
              >
                Нет
              </button>
            </div>
          </div>
        </Modal>
      )}
    </div>
  );
}

export default LogoutModal;

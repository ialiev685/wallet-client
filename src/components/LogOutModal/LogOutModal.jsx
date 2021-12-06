import Modal from '../Modal';
import s from './LogOutModal.module.css'

function LogOutModal(props) {
  const {showModal, toggleModal, logOutHandler} = props;

  const {
    modalConatiner,
    modalTitle,
    button,
    modalButton,
  } = s;

  return <div>
   {showModal && (
        <Modal onToggleModal={toggleModal} showModal={showModal}>
          <div className={modalConatiner}>
            <h4 className={modalTitle}>Вы уверены, что хотите выйти?</h4>
            <div>
              <button
                className={button}
                type="button"
                onClick={() => logOutHandler()}
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
}

export default LogOutModal;
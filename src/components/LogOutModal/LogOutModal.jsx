import { useDispatch, useSelector } from 'react-redux';
import { modalAction, modalSelectors } from 'redux/modal';
import Modal from '../Modal';
import s from './LogOutModal.module.css';

function LogoutModal(props) {
  const { logoutHandler } = props;

  const showModal = useSelector(modalSelectors.getIsLogoutModal);
  const dispatch = useDispatch();

  const { modalConatiner, modalTitle, button, modalButton } = s;

  return (
    <div>
      {showModal && (
        <Modal
          onCloseModal={() => dispatch(modalAction.closeLogouteModal())}
          showModal={showModal}
        >
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
                onClick={() => dispatch(modalAction.closeLogouteModal())}
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

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { authSelectors, authOperations } from 'redux/auth';
import LogoutModal from '../LogOutModal';
import style from './Header.module.css';
import logo from 'helpers/svg/logo.svg';
import logout from 'helpers/svg/logout.svg';

const Header = () => {
  const name = useSelector(authSelectors.getIsUserName);
  const token = useSelector(authSelectors.getIsAuthToken);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const logoutHandler = () => {
    if (token) {
      dispatch(authOperations.logOutUser());
    } else {
      toast.error('Something went wrong!');
      toggleModal();
    }
  };

  return (
    <div className={style.container}>
      <ul className={style.menuList}>
        <li>
          {/* переход на главную страницу */}
          <button onClick={() => {}}>
            <img className={style.logo} src={logo} alt="logo wallet" />
          </button>
        </li>
        <li className={style.logout}>
          {/* получить имя после входа */}
          <span className={style.logoutItem}>{name}</span>
          {/* отправить на модалку подтверждения выхода */}

          <button
            type="button"
            className={style.logoutItemButton}
            onClick={() => toggleModal()}
          >
            <img
              className=""
              src={logout}
              height="18"
              width="18"
              alt="logout"
            />

            <span className={style.logoutItemText}>Выйти</span>
            <LogoutModal
              logoutHandler={logoutHandler}
              toggleModal={toggleModal}
              showModal={showModal}
            />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;

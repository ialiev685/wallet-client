import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { authSelectors, authOperations } from 'redux/auth';
import LogOutModal from '../LogOutModal'
import style from './Header.module.css';
import logo from 'helpers/svg/logo.svg';
import logout from 'helpers/svg/logout.svg';

const Header = () => {
  const name = useSelector(state => state.auth.user.name);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);

  const logOutHandler = () => {
    if (token) {
      dispatch(authOperations.logOutUser());
    } else {
      toast.error('Something went wrong!');
      setShowModal(!showModal);
    }
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={style.container}>
      <ul className={style.menuList}>
        <li>
          {/* переход на главную страницу */}
          <button onClick={() => {}}>
            <img className={style.logo} src={logo} />
          </button>
        </li>
        <li className={style.logout}>
          {/* получить имя после входа */}
          <span className={style.logoutItem}>{name}</span>
          {/* отправить на модалку подтверждения выхода */}
          <button className={style.logoutItemButton} onClick={() => toggleModal()}>
            <img className="" src={logout} height="18" width="18" />
            <span className={style.logoutItemText}>Выйти</span>
            <LogOutModal showModal={showModal} toggleModal={toggleModal} logOutHandler={logOutHandler} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;

import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { authSelectors, authOperations } from 'redux/auth';
import { modalAction } from 'redux/modal';
import LogoutModal from '../LogoutModal'
import style from './Header.module.css';
import logo from 'helpers/svg/logo.svg';
import logout from 'helpers/svg/logout.svg';

const Header = () => {
  const name = useSelector(state => state.auth.user.name);
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    if (token) {
      dispatch(authOperations.logOutUser());
    } else {
      toast.error('Something went wrong!');
      dispatch(modalAction.closeLogouteModal());
    }
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
          <button type="button" className={style.logoutItemButton} onClick={() => dispatch(modalAction.openLogoutModal())}>
            <img className="" src={logout} height="18" width="18" />
            <span className={style.logoutItemText}>Выйти</span>
            <LogoutModal logoutHandler={logoutHandler} />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;

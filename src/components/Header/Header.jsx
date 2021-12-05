import style from './Header.module.css';
import logo from 'helpers/svg/logo.svg';
import logout from 'helpers/svg/logout.svg';

const Header = () => {
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
          <span className={style.logoutItem}>Имя</span>
          {/* отправить на модалку подтверждения выхода */}
          <button className={style.logoutItemButton} onClick={() => {}}>
            <img className="" src={logout} height="18" width="18" />
            <span className={style.logoutItemText}>Выйти</span>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Header;

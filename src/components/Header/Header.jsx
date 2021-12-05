import style from './Header.module.css';

const Header = () => {
  return (
    <div className={style.container}>
      <nav>
        <ul className={style.menuList}>
          <li className={style.logo}>
            {/* переход на главную страницу */}
            <button>Wallet</button>
          </li>
          <li className={style.logout}>
            {/* получить имя после входа */}
            <span className={style.logoutItem}>Имя</span>
            {/* отправить на модалку подтверждения выхода */}
            <button className={style.logoutItem}>Logout</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;

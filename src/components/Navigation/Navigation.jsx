import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import s from './Navigation.module.css';

export const Navigation = () => {
  const setActiveClass = ({ isActive }) =>
    `${s.navLink}` + (isActive ? ` ${s.activeNavLink}` : '');

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <nav className={s.navigation}>
      <NavLink to="/home" className={setActiveClass}>
        {/* <span className={s.iconBox}> */}

        <Icons name={'home'} className={s.icon} />
        {/* </span> */}
        {/* { */}
        {/* // !isMobile && */}
        <span className={s.routeName}>Главная</span>

        {/* // } */}
      </NavLink>
      <NavLink to="/diagram" className={setActiveClass}>
        <Icons name={'diagramm'} className={s.icon} />
        {/* { */}
        {/* // !isMobile && */}

        <span className={s.routeName}>Статистика</span>
        {/* } */}
      </NavLink>

      {isMobile && (
        <NavLink to="/currency" className={setActiveClass}>
          <Icons name={'currency'} className={s.icon} />
        </NavLink>
      )}
    </nav>
  );
};

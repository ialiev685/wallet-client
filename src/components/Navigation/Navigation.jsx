import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import s from './Navigation.module.css';

export const Navigation = () => {
  const setActiveClass = ({ isActive }) =>
    `${s.navLink}` + (isActive ? ` ${s.activeNavLink}` : '');

  return (
    <nav className={s.navigation}>
          <NavLink
              to="/home"
              className={setActiveClass}>
        <Icons name={'home'} className={s.icon} />
        <span className={s.routeName}>Главная</span>
      </NavLink>
          <NavLink
              to="/diagram"
              className={setActiveClass}>
        <Icons name={'diagramm'} className={s.icon} />
        <span className={s.routeName}>Статистика</span>
      </NavLink>
          <NavLink
              to="/currency"
              className={`${setActiveClass} ${s.currency}`}>
              <Icons name={'currency'} className={s.icon} />
      </NavLink>
    </nav>
  );
};

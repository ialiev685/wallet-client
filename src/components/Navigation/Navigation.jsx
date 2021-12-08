import { useMediaQuery } from 'react-responsive';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import HomeIcon from '@mui/icons-material/Home';
import TimelineIcon from '@mui/icons-material/Timeline';

const Navigation = ({ className = '' }) => {
  const setActiveClass = ({ isActive }) =>
    `${s.navLink}` + (isActive ? ` ${s.activeNavLink}` : '');

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });

  return (
    <nav className={`${s.navigation} ${className}`}>
      {/* <nav className={s.navigation}> */}
      <NavLink to="/home" className={setActiveClass}>
        <HomeIcon className={s.icon} />
        {!isMobile && <span className={s.routeName}>Главная</span>}
      </NavLink>
      <NavLink to="/diagram" className={setActiveClass}>
        <TimelineIcon className={s.icon} />
        {!isMobile && <span className={s.routeName}>Статистика</span>}
      </NavLink>

      {isMobile && (
        <NavLink to="/currency" className={setActiveClass}>
          <AttachMoneyIcon className={s.icon} />
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;

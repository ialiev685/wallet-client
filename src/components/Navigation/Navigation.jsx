import { NavLink } from 'react-router-dom';
import Icons from '../Icons';
import s from './Navigation.module.css'

export const Navigation = () => {
  return (
    <nav>
      <NavLink to="/home">
        <Icons name={'home'} />
        Главная
      </NavLink>
      <NavLink to="/diagram">
        <Icons name={'diagramm'} />
        Статистика
      </NavLink>
      <NavLink to="/currency">
        <Icons name={'currency'} />
        Курс Валют
      </NavLink>
    </nav>
  );
};

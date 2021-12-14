import s from './Background.module.css';
import ellipseBlue from 'images/background-images/EllipseBlue.png';
import ellipsePink from 'images/background-images/EllipsePink.png';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Background = ({ children, className = '' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div className={`${s.box} ${className} ${isLoggedIn && s.isLoggin}`}>
      <div className={s.blur}></div>
      <img src={ellipseBlue} alt="EllipseBlue" className={s.ellipseBlue} />
      <img src={ellipsePink} alt="EllipsePink" className={s.ellipsePink} />

      {children}
    </div>
  );
};

export default Background;

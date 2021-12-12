import s from './Background.module.css';

import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const Background = ({ children, className = '' }) => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    // <div className={s.colorBox}>
    <div className={`${s.box} ${className} ${isLoggedIn && s.isLoggin}`}>
      {/* <div className={s.blueCircle}></div> */}

      {children}
    </div>
    // </div>
  );
};

export default Background;

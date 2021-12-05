import s from './Background.module.css';

const Background = ({ children }) => {
  return <div className={s.box}>{children}</div>;
};

export default Background;

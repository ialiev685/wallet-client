import s from './Background.module.css';

const Background = ({ children, className = '' }) => {
  return (
    <div className={s.colorBox}>
      <div className={`${s.box} ${className}`}>{children}</div>
    </div>
  );
};

export default Background;

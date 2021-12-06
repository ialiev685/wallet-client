import s from './Background.module.css';

const Background = ({ children, className = '' }) => {
  return <div className={`${s.box} ${className}`}>{children}</div>;
};

export default Background;

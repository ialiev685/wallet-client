import s from './Background.module.css';

const Background = ({ children, classDashboardPage }) => {
  return <div className={`${s.box} ${classDashboardPage}`}>{children}</div>;
};

export default Background;

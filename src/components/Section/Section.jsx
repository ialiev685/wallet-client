import s from './Section.module.css';

const Section = ({ children, className = '' }) => {
  return <section className={`${s.section} ${className}`}>{children}</section>;
};
export default Section;

import s from './ProgressBar.module.css';

const ProgressBar = ({style =''}) => {

  let styles = `${s.progressLine} ${style}`;
  
  return (
    <div className={styles}>  
    </div>
  );
};

export default ProgressBar;


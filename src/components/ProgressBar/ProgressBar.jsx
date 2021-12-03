import s from './ProgressBar.module.css';

const ProgressBar = ({style =''}) => {
 const styles = `${style} ${s.progress}`
  return (
    <div className={styles}>
      {/* <div className={style}>      
      </div> */}
    </div>
  );
};

export default ProgressBar;

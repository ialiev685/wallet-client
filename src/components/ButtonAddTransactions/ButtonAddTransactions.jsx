import s from './ButtonAddTransactions.module.css';

function ButtonAddTransactions () {
  const { buttonContainer, button, span, rotateSpan } = s;

  return (
  <div className={buttonContainer}>
    <button className={button} type="button">
      <span className={span}></span>
      <span className={rotateSpan}></span>
    </button>
  </div>
  );
}

export default ButtonAddTransactions;
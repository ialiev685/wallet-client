import s from './ButtonAddTransactions.module.css';

function ButtonAddTransactions({ className = '' }) {
  // const { buttonContainer, button, span, rotateSpan } = s;
  const { button, span, rotateSpan } = s;

  return (
    <>
      <button className={`${button} ${className}`} type="button">
        <span className={span}></span>
        <span className={rotateSpan}></span>
      </button>
    </>
  );
}

export default ButtonAddTransactions;
// function ButtonAddTransactions({className=''}) {
//   const { buttonContainer, button, span, rotateSpan } = s;

//   return (

//     <div className={buttonContainer}>

//     <button button className = {`${button} ${className}`
// } type = "button" >
//         <span className={span}></span>
//         <span className={rotateSpan}></span>
//       </button >

//     </div>
//   );
// }

// export default ButtonAddTransactions;

// import React, { useState } from "react";
// // import './App.css';

// const  Counter = () => {
//   const [counter, setCounter] = useState(0);
//   const [value, setValue] = useState(0);

//   const UpdateClick = () => {
//     setCounter(counter + value);
//   };

//   const ValueChange = (event) => {
//     setValue(Number(event.target.value));
//   };

//   const handleReset = () => {
//     setCounter(0);
//   };

//   return (
//     <div className="wrapper">
//       <h1>Счетчик: {counter}</h1> 
//       <button onClick={UpdateClick}>Обновить</button> 
//       <p>Увеличить счетчик</p>
//       <input type="number" value={value} onChange={ValueChange} />
      
//       {/* <button className="btn card__btn" onClick={handleReset}>0 </button>     */}
//     </div>
//   );
// }

// export default Counter;

// import React, { useState } from 'react';

// const Counter = () => {
//   const [count, setCount] = useState(0);
// //   const [value, setValue] = useState(0);
// //   const [count, setCounter] = useState(0);


//   const handleIncrement = () => {
//     setCount((count) => count + 1);
//   };
//   const handleDecrement = () => {
//     setCount((count) => count - 1);
//   };
//   const handleReset = () => {
//     setCount(0);
//   };

// //   const ValueChange = (event) => {
// //     setValue(Number(event.target.value));
// //   };

//   const UpdateClick = () => {
//     setCount(count + value);
//   };

//   return (
//     <div className="counter center">
//       <h1 className="counter__title">Counter App</h1>
//       <div className="card center">
//       <button onClick={UpdateClick}>Обновить</button>      
//         <h2 className="card__title">Count : {count}</h2>
//         <div className="card__btns">
//           <button
//             className="btn card__btn"
//             onClick={handleIncrement}
//             disabled={count === 5 ? true : false}>
//             +
//           </button>
//           <button
//             className="btn card__btn"
//             onClick={handleDecrement}
//             disabled={count === -5 ? true : false}>
//             -
//           </button>
//           <button className="btn card__btn" onClick={handleReset}>
//             0
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Counter;

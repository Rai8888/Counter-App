import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div>
      <Counter />
    </div>
  );
};

export default App;




// import React, { useState } from "react";
// import './App.css';

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [value, setValue] = useState(0);

//   const UpdateClick = () => {
//     setCounter(counter + value);
//   };

//   const ValueChange = (event) => {
//     setValue(Number(event.target.value));
//   };

//   return (
//     <div className="wrapper">
//       <h1>Счетчик: {counter}</h1>
//       <p>Увеличить счетчик</p>
//       <input type="number" value={value} onChange={ValueChange} />
//       <button onClick={UpdateClick}>Обновить</button>      
//     </div>
//   );
// }

// export default App;
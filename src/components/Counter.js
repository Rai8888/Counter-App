import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);


     const updateCounter = () => {
    setCount(count + value);
      };

    const handleReset = () => {
    setValue(0);
      };
  

  const updateValue = (e) => {
    setValue(Number(e.target.value));
  };

  return (
    <div className="wrapper">
      <h1>Counter: {count}</h1>
      <input type="number" value={value} onChange={updateValue} /> 
      <button className="btn"onClick={(event) => { updateCounter(event); handleReset();}}>reset</button>     
    </div>
  );
  
}

export default App;


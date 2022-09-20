import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

//  main component
function App() {  
  
  return (
    <div className="App">
      <Counter></Counter>
 
    </div>
  );
}

// function call and create  component

 
function Counter(props){
 const [count, setCount] = useState(0);
// //details
//  const countIncrese = () => {
//   const newCount = count + 1;
//   setCount(newCount)
//  }
//  sort cart
  const countIncrese= () => setCount (count + 1);
  const countDecrese = () => setCount (count - 1);
  
  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={countIncrese}>Increse</button>
      <button onClick={countDecrese}>Decrease</button>
    </div>
  )
}
 
export default App;

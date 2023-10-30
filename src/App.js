import './App.css';
import { useState } from 'react';
import Display from './components/Display';
import Form from './components/Form';



function App() {

  //Starting with three test boxes to validate react functionality
  const [box, setBox] = useState([
    { color: "green" },
    { color: "blue" },
    { color: "red" }
  ])

  const makeNewBox = (newBox) => {
    setBox([...box, newBox]);
  }

  return (
    <div className="App">
      <fieldset>
        <legend>App.js</legend>
        <Form makeNewBox={makeNewBox}/>
        <Display boxes={box} />
      </fieldset>
    </div>
  );
}

export default App;

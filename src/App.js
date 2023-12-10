import { useState } from 'react';
import './index.css';

function App() {

  const [opacity, setOpacity] = useState(true);

  return (
    <div className="App" onClick={() => {setOpacity(!opacity)}}>
      <h1>Hello, my name is <span className={opacity? "dfgdfg" : "dontShow"} onClick={() => {setOpacity(!opacity)}}>Sanjeev</span>.  👋 to meet you.</h1>
      {/* <span className={opacity? "dfgdfg" : "dontShow"} onClick={() => {setOpacity(!opacity)}}>Sanjeev</span> */}
    </div>
  );
}

export default App;

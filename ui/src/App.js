import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [visible, setVisible]=useState(false);
  return (
    <div className="App App-header">
      <h3>
        URL Shortener
      </h3>
      <form className="form">
        <input type="text" id="link" />
        <button type="button" id="button" onClick={()=> setVisible(!visible)} >
          <span className='title'>Shorten</span> <i className="arrow right"></i>
        </button>
      </form>
      
      {visible && <a
        className="App-link"
      >
        [Show your result here]
      </a>}
    </div>
  );
}

export default App;

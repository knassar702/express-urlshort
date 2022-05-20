import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App App-header">
      <h3>
        URL Shortener
      </h3>
      <form className="form">
        <input type="text" id="link" />
        <input type="button" for="link" id="enter" value="Shorten"/>
      </form>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </div>
  );
}

export default App;

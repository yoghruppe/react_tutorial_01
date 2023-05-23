import logo from './logo.svg';
import './App.css';
import HogeHoge from './Hoge.js'

function Hoge() {
  return (
    <div>
      <h1>Hoge</h1>
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {(function () {
          const h1s = [];
          for (let i = 0; i < 5; i++) {
            h1s.push(<HogeHoge />);
          }
          return <div>{h1s}</div>;
        }())}
        <Hoge />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          hello world
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

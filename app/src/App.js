import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

let counter = 0;

function App() {
  //useState()関数は、
  //変数の初期値を設定する
  //変数を更新するための関数を作る
  //という処理を実行し、その初期値と関数を配列の形で返す。
  const[counter,setCounter] = useState();
  console.info(counter,setCounter);
  const plusOne = () => {
    setCounter(counter + 1);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          カウンタプログラム
        </p>
        <p>{counter}</p>
        <button id = "plus" type = "button" onClick = {plusOne}>
          +1する
        </button>
      </header>
    </div>
  );
}

export default App;

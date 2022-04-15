import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null)
  const [toggle, setToggle] = useState(false)
  const [value, setValue] = useState('')

  const onClick = () => setToggle(value => !value)

  useEffect(()=>{
    setTimeout(()=>{
      setData({})
    }, 100)
  },[])

  return (
    <div>
      <h1 data-testid="value-elem">{value}</h1>
      {toggle === true && <div data-testid="toggle-elem">toggle</div>}
      {data && <div style={{color:'red'}}>data</div>}
      <h1>Hello world</h1>
      <button data-testid="toggle-btn" onClick={onClick}>Click me</button>
      <input type="text" placeholder="input value" onChange={event=>setValue(event.target.value)}></input>
    </div>
  );
}

export default App;

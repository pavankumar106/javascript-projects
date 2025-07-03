import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const intervalRef = useRef(null);

  const startHandler = (e) => {
    var text = e.target.innerText;
    if (text === "Start") {
      setTimerStarted(true);
      if (intervalRef.current) return;

      intervalRef.current = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
    } else {
      stopHandler();
    }
  };

  const stopHandler = (e) => {
    setTimerStarted(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetHandler = () => {
    setTimerStarted(false);
    setCount(0);
    if (timerStarted) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  return (
    <>
      <h2 className="text">React Machine coding example</h2>
      <div className="comp">
        <p className={`${timerStarted ? "green" : "red"} `}>{count}</p>
        <div className="">
          <button onClick={(e) => startHandler(e)}>
            {timerStarted ? "Stop" : "Start"}
          </button>
          {/* <button onClick​={stopHandler}>Stop</button> */}
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </>

  );
}

export default App;
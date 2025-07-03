# React machine coding problem

**Problem Statement**

- Create a react component that displays a timer with initial value 0.
- There should be two buttons one to start/stop, and other to reset timer.
- Clicking on start will start timer from 0 and increase timer value by 1 for every second and button text should change to "stop".
- Clicking on stop will pause the timer and change button text to "start".
- Now click on start then timer should continue from paused value.
- Clicking on reset will reset the timer to initial value 0.

App.js

```js
import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [timerStarted, setTimerStarted] = useState(false);
  const intervalRef = useRef(null);

  const startHandler = () => {
    setTimerStarted(true);
    if (intervalRef.current) return;

    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopHandler = () => {
    setTimerStarted(false);
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const resetHandler = () => {
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
          <button onClick={startHandler}>Start</button>
          <button onClick={stopHandler}>Stop</button>
          <button onClick={resetHandler}>Reset</button>
        </div>
      </div>
    </>
  );
}

export default App;
```

App.css

```css
.text {
  text-align: center;
}

.comp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.comp p {
  font-size: 24px;
  margin: 10px;
  color: #333;
  width: 50px;
  height: 50px;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  background-color: antiquewhite;
  text-align: center;
}
.comp .green {
  color: green;
}
.comp .red {
  color: red;
}
.comp button {
  width: max-content;
  height: 50px;
  font-size: 20px;
  margin: 10px;
  padding: 5px 8px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
.comp button:hover {
  background-color: #0056b3;
}
```

<img src="./image.png" alt="image-showing the ui" />

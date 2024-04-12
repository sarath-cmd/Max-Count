import './App.css';
import {useState, useEffect} from 'react'

function App() {

  const [Score, setScore] = useState(0)
  const [Timeleft, setTimeleft] = useState(10)
  const [StartDisp, setStartDisp] = useState(true)
  const [ScorebtnDisp, setScorebtnDisp] = useState(false)
  

  const handleStart =() => {
    setStartDisp(false)
    setScorebtnDisp(true)
    setScore(0)
    alert("Start Game!")
  }
  useEffect(() => {
    if(ScorebtnDisp && Timeleft > 0)
    {
      const timer = setInterval(() => {
        setTimeleft((prevTimeleft) => prevTimeleft - 1)
      }, 1000)
      return () => clearInterval(timer)
    }
    setScorebtnDisp(false)
    setTimeleft(10)
    setStartDisp(true)
  }, [Timeleft, ScorebtnDisp])

  const handleScore = () => {
    setScore((prevScore) => prevScore + 1)
  }

  return (
    <div>
      <h1>Max Count</h1>
      <div className='maindiv'>
        <span>{Score}</span>
        <h2>Time Remaining: {Timeleft} Seconds</h2>
        {StartDisp && <button onClick={handleStart}>Start</button>}
        {ScorebtnDisp && (<button onClick={handleScore}>+</button>)}
      </div>
    </div>
  );
}

export default App;

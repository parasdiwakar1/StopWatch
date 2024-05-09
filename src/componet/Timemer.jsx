import React, { useState, useRef, useEffect } from 'react';

function Timer() {
  const [ss, setSS] = useState(0);
  const [mm, setMM] = useState(0);
  const [hh, setHH] = useState(0);
  const totleTime = useRef(0);
  const timerRef = useRef(null);
  const [timerRunning, setTimerRunning] = useState(false);

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  const handleStart = () => {
    if (ss === 0 && mm === 0 && hh === 0) return;

    totleTime.current = hh * 3600 + mm * 60 + ss;
    setTimerRunning(true);

    timerRef.current = setInterval(() => {
      totleTime.current -= 1;
      if (totleTime.current === 0) {
        clearInterval(timerRef.current);
        setTimerRunning(false);
        setHH(0);
        setMM(0);
        setSS(0);
      } else {
        setHH(Math.floor(totleTime.current / 3600));
        setMM(Math.floor((totleTime.current % 3600) / 60));
        setSS(Math.floor(totleTime.current % 60));
      }
    }, 1000);
  };

  const handleStop = () => {
    clearInterval(timerRef.current);
    setTimerRunning(false);
  };

  const handleReset = () => {
    clearInterval(timerRef.current);
    setTimerRunning(false);
    setHH(0);
    setMM(0);
    setSS(0);
  };

  const handleHHChange = (e) => {
    setHH(parseInt(e.target.value, 10));
  };

  const handleMMChange = (e) => {
    setMM(parseInt(e.target.value, 10));
  };

  const handleSSChange = (e) => {
    setSS(parseInt(e.target.value, 10));
  };

  return (
    <div className='mainX'>

    <div className='main1'>
      <h2>Timer</h2>                
      <input type="number" onChange={handleHHChange} value={hh} />
      <input type="number" onChange={handleMMChange} value={mm} />
      <input type="number" onChange={handleSSChange} value={ss} />
      <br />
      <br />
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleReset}>Reset</button>
    </div>
    </div>
  );
}

export default Timer;

import React, { useRef } from 'react'
import "../App.css"
import { useState } from 'react'

function Watch() {
  const [time,setTime]=useState(0)
  const setXtime=useRef(null)
  const timeref=useRef(0)
  const handlerStart=()=>{
    timeref.current=(Date.now())
    setXtime.current=setInterval(() => {
      setTime(Date.now()-timeref.current)
    },100);

  }
  const handlerStop=()=>{
    clearInterval(setXtime.current)

  }
  const handlerReset=()=>{
    setTime(0)

  }
  const timeData=()=>{
    let ss=Math.floor(time/(1000*60)%60);
    let mm=Math.floor(time/(1000)%60);
    let hh=Math.floor(time%1000/10);

    ss = String(ss).padStart(2, "0");
    mm = String(mm).padStart(2, "0");
    hh = String(hh).padStart(2, "0");
    return `${ss}: ${mm}:${hh}`
  }
  return (
    <div className='mainX'>

    <div className='main'>
      <h2>Stop Watch</h2>
    <h1>{timeData()}</h1>
    <button onClick={handlerStart}>Start</button>
    <button onClick={handlerStop}>Stop</button>
    <button onClick={handlerReset}>Reset</button>
    
    </div>
    </div>
  )
}

export default Watch
import React, { useState } from 'react'
import Watch from './componet/watch'
import Timemer from './componet/Timemer'


function App() {
  const [Change,setChange]=useState(true);
  
  const handlerStop=()=>{
    setChange(!Change)
  }
  return (
    < div className='boxApp'>
    <button onClick={handlerStop}>Switch</button>
    {Change? <Timemer/>:<Watch/> }
  
    </div>
  )
}

export default App
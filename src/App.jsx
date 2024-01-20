import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [timeObj,setTimeObj] = useState(new Date());
  useEffect(()=>{
    let intervalId = setInterval(()=>{
      setTimeObj(new Date())
    }, 100);
    return ()=>clearInterval(intervalId);
  },[])
  return (
    <>
      {/* <div className='Box'>
        <h1 className='content'>Hi</h1>
      </div> */}
      <div className='root-app'>
        <div className='container'>
          <div className="dial">
            <div className="number number1"><span className='rev rev1'>1</span></div>
            <div className="number number2"><span className='rev rev2'>2</span></div>
            <div className="number number3"><span className='rev rev3'>3</span></div>
            <div className="number number4"><span className='rev rev4'>4</span></div>
            <div className="number number5"><span className='rev rev5'>5</span></div>
            <div className="number number6"><span className='rev rev6'>6</span></div>
            <div className="number number7"><span className='rev rev7'>7</span></div>
            <div className="number number8"><span className='rev rev8'>8</span></div>
            <div className="number number9"><span className='rev rev9'>9</span></div>
            <div className="number number10"><span className='rev rev10'>10</span></div>
            <div className="number number11"><span className='rev rev11'>11</span></div>
            <div className="number number12"><span className='rev rev12'>12</span></div>
            <div className="hand hour" style={{transform: `rotate(${timeObj.getHours()*30}deg)`}}></div>
            <div className="hand minute" style={{transform: `rotate(${timeObj.getMinutes()*6}deg)`}}></div>
            <div className="hand second" style={{transform: `rotate(${timeObj.getSeconds()*6}deg)`}}></div>
            <div className="center"></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App

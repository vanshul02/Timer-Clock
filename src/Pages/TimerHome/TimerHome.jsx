import { React, useState } from 'react'
import './TimerHome.css'
import Timer from '../../Components/Timer/Timer'


const TimerHome = () => {
    const [timerList, setTimerList] = useState([])
    const [count, setCount] = useState(1)

    const removeTimer = (e) => {
        let id = e.target.getAttribute('id')
        console.log("Removed ID: ", id)
        setTimerList(prevTimerList => prevTimerList.filter(timerObject => timerObject.id !== id))
    }

    const addTimer = () => {
        let id = "timer-" + count
        setCount(cnt => cnt + 1)
        let obj = {
            id: id,
            timer: <><Timer id={id} /></>
        }
        setTimerList(prevTimerList => [...prevTimerList, obj])
    }

    const removeAllTimerHandler = () => {
        setTimerList([])
    }

    return (
        <>
            <div className='timer-home-content'>
                <div className="add-timer-container">
                    <input type="button" className="timer-support-btn" onClick={addTimer} value="Add Timer" />
                    <input type="button" className="timer-support-btn" onClick={removeAllTimerHandler} value="Remove All Timers" />
                </div>
                <div className='timer-list-box'>{timerList.map(entry =>
                    <div key={entry.id} className='timer-container'>
                        {entry.timer}
                        <input id={entry.id} type="button" className="remove-timer-btn" onClick={removeTimer} value="Remove Timer" />
                    </div>
                )}
                </div>
            </div>
        </>
    )
}

export default TimerHome
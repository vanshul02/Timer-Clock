import { React, useState } from 'react'
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

    return (
        <>
            <input type="button" className="add-timer-btn" onClick={addTimer} value="Add Timer" />
            <div>{timerList.map(entry =>
                <div key={entry.id}>
                    {entry.timer}
                    <input id={entry.id} type="button" className="remove-timer-btn" onClick={removeTimer} value="Remove Timer" />
                </div>
            )}
            </div>
        </>
    )
}

export default TimerHome
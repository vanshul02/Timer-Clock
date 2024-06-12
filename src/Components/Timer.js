import { React, useState, useEffect } from 'react'


const Timer = (props) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(null)

    useEffect(() => {
        let interval
        if (isRunning) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds => seconds - 1)
                } else if (minutes > 0) {
                    setSeconds(59)
                    setMinutes(minutes => minutes - 1)
                } else if (hours > 0) {
                    setSeconds(59)
                    setMinutes(59)
                    setHours(hours => hours - 1)
                }
            }, 1000)
        }
        return () => { clearInterval(interval) }
    }, [seconds, minutes, hours, isRunning])

    const isRunningHandler = () => {
        setIsRunning(isRunning => isRunning === null ? true : !isRunning)
    }

    const secondsHandler = (e) => {
        let value = e.target.value
        setSeconds(value)
    }
    const minutesHandler = (e) => {
        let value = e.target.value
        setMinutes(value)
    }
    const hoursHandler = (e) => {
        let value = e.target.value
        setHours(value)
    }

    return (
        <>
            <div className='timer-parent'>
                <label>HH</label><input className='timer' value={hours} maxLength={2} onChange={hoursHandler} />
                <label>MM</label><input className='timer' value={minutes} maxLength={2} onChange={minutesHandler} />
                <label>SS</label><input className='timer' value={seconds} maxLength={2} onChange={secondsHandler} />
                <input type="submit" value="Start" onClick={isRunningHandler} />
            </div>
        </>
    )
}

export default Timer
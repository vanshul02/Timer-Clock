import { React, useState, useEffect } from 'react'
import './Timer.css'


const Timer = (props) => {
    const [hours, setHours] = useState(0)
    const [minutes, setMinutes] = useState(0)
    const [seconds, setSeconds] = useState(0)
    const [isRunning, setIsRunning] = useState(false)

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
        if (seconds === 0 && minutes === 0 && hours === 0) setIsRunning(false)
        return () => { clearInterval(interval) }
    }, [seconds, minutes, hours, isRunning])

    const isRunningHandler = () => {
        setIsRunning(isRunning => !isRunning)
    }

    const secondsHandler = (e) => {
        let value = e.target.value
        if (value > 60) {
            value = 60
        } else if (value < 0) {
            value = 0
        }
        setSeconds(value)
    }
    const minutesHandler = (e) => {
        let value = e.target.value
        if (value > 60) {
            value = 60
        } else if (value < 0) {
            value = 0
        }
        setMinutes(value)
    }
    const hoursHandler = (e) => {
        let value = e.target.value
        if (value < 0) {
            value = 0
        }
        setHours(value)
    }

    return (
        <>
            <div className='timer-parent'>
                <label>HH</label><input type="number" className='timer-input' value={hours} maxLength={2} onChange={hoursHandler} />
                <label>MM</label><input type="number" className='timer-input' value={minutes} maxLength={2} onChange={minutesHandler} />
                <label>SS</label><input type="number" className='timer-input' value={seconds} maxLength={2} onChange={secondsHandler} />
                <input className='timer-run-btn' type="submit" value={isRunning && (seconds > 0 || minutes > 0 || hours > 0) ? "Pause" : "Start"} onClick={isRunningHandler} />
            </div>
        </>
    )
}

export default Timer
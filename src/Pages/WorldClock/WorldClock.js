import { React, useEffect, useState } from 'react'
import axios from 'axios'

import TimeZoneSelector from '../../Components/TimeZoneSelector/TimeZoneSelector'


const WorldClock = () => {

  const [seconds, setSeconds] = useState(null)
  const [minutes, setMinutes] = useState(null)
  const [hours, setHours] = useState(null)
  const [date, setDate] = useState(null)
  const [timeZone, setTimeZone] = useState(null)

  let addOneTime = (val) => {
    let addedOneTime = String(parseInt(val) + 1)
    if (addedOneTime.length < 2) {
      addedOneTime = "0" + addedOneTime
    }
    return addedOneTime
  }

  const fetchAndParseTime = async (timeZone) => {
    let url = "https://worldtimeapi.org/api/timezone/" + timeZone
    await axios.get(url).then(response => {
      let dateTimeString = String(response.data.datetime)
      console.log(dateTimeString)

      let timeString = dateTimeString.substring(dateTimeString.indexOf("T") + 1, dateTimeString.indexOf("."))
      let dateString = dateTimeString.substring(0, dateTimeString.indexOf("T"))
      setDate(dateString)

      let timeArray = timeString.split(":")
      setHours(timeArray[0])
      setMinutes(timeArray[1])
      setSeconds(timeArray[2])
    }).catch(err => console.log(err))
  }

  const timeZoneHandler = async (ele) => {
    let selectedTimeZone = ele.currentTarget.value
    setTimeZone(selectedTimeZone)
    await fetchAndParseTime(selectedTimeZone)
  }

  useEffect(() => {
    let interval
    if (hours !== null) {
      interval = setInterval(() => {
        if (parseInt(seconds) < 59) {
          setSeconds(seconds => addOneTime(seconds))
        } else if (parseInt(minutes) < 59) {
          setSeconds("00")
          setMinutes(minutes => addOneTime(minutes))
        } else if (parseInt(hours) < 24) {
          setSeconds("00")
          setMinutes("00")
          setHours(hours => addOneTime(hours))
        } else {
          fetchAndParseTime(timeZone)
        }
      }, 1000)
    }
    return () => { clearInterval(interval) }
  }, [hours, minutes, seconds, timeZone])

  const renderTime = () => {
    if (date !== null && hours !== null && minutes !== null && seconds !== null) {
      return (
        <div>
          <div>{hours} : {minutes} : {seconds}</div>
          <div>{date}</div>
        </div>
      )
    }
  }

  return (
    <>
      <TimeZoneSelector handler={timeZoneHandler} />
      {renderTime()}
    </>
  )
}

export default WorldClock
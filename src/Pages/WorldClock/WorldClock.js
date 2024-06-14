import { React, useEffect, useState } from 'react'
import axios from 'axios'

const WorldClock = () => {
  const [timeZoneList, setTimeZoneList] = useState([])

  useEffect(() => {
    axios.get("https://worldtimeapi.org/api/timezone/").then(
      resp => {
        console.log(resp.data)
        let timeZones = resp.data
        setTimeZoneList(timeZones)
      }
    )
  }, [])
  return (
    <>
      <div className='time-zone-selector'>
        <select name="time-zone" id="time-zone-select">
          {
            timeZoneList.map(timeZone =>
              <option value={timeZone}>{timeZone}</option>
            )
          }
        </select>
      </div>
    </>
  )
}

export default WorldClock
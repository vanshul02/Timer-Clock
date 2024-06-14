import { React, useEffect, useState } from 'react'
import axios from 'axios'

import TimeZoneSelector from '../../Components/TimeZoneSelector/TimeZoneSelector'


const WorldClock = () => {

  const [date, setDate] = useState(null)

  const timeZoneHandler = async (ele) => {
    let selectedTimeZone = ele.currentTarget.value
    let url = "https://worldtimeapi.org/api/timezone/" + selectedTimeZone
    await axios.get(url).then(response => {
      console.log(response.data)
      const fetchedDate = Date.parse(response.data.datetime)
      setDate(fetchedDate)
    })
  }

  return (
    <>
      <TimeZoneSelector handler={timeZoneHandler} />
      <div>{date !== null ? date : null}</div>
    </>
  )
}

export default WorldClock
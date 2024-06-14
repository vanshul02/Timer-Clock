import { React, useState, useEffect } from 'react'
import axios from 'axios'
import ListSelector from '../../Components/ListSelector/ListSelector'

const TimeZoneSelector = (props) => {
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
                <ListSelector id="time-zone-select" name="time-zone" optionList={timeZoneList} handler={props.handler} />
            </div>
        </>
    )
}

export default TimeZoneSelector
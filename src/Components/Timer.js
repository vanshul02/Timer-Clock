import { React, useState } from 'react'


const Timer = (props) => {
    const [count, setCount] = useState(0)
    let id = props.id
    console.log(id)

    const addCountHandler = () => { setCount(oldCount => oldCount + 1) }

    return (
        <>
            <div>{count}</div>
            <input type='button' onClick={addCountHandler} value="Add Count" />
        </>
    )
}

export default Timer
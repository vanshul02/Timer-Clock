import React from 'react'
import './ListSelector.css'

const ListSelector = (props) => {
    return (
        <>
            <select name={props.name} id={props.id} onChange={props.handler}>
                {
                    props.optionList.map(option =>
                        <option value={option}>{option}</option>
                    )
                }
            </select>
        </>
    )
}

export default ListSelector
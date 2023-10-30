import React from 'react'
import { useState } from 'react'

const Form = (props) => {
    // State Variable to capture selected color for new box
    const [boxColor, setBoxColor] = useState("000000")
    const [boxHeight, setBoxHeight] = useState(100)
    const [boxWidth, setBoxWidth] = useState(100)

    const handleSubmit = (e) => {
        e.preventDefault()

        const newBox = {
            color: boxColor,
            height: boxHeight,
            width: boxWidth
        };
        props.makeNewBox(newBox)
        setBoxColor("")

    }

    return (
        <fieldset>
            <legend>Form.jsx</legend>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="color">Pick a Color for a new Box to display below:</label>
                <p><input type="color" id="color" onChange={ (e) => setBoxColor(e.target.value)}/></p>
                <p><label htmlFor="height">Set the Height for a new Box to display below:</label>
                <input type="number" id="height" placeholder="100" onChange={ (e) => setBoxHeight(e.target.value +"px")}/></p>
                <p><label htmlFor="width">Set the Width for a new Box to display below:</label>
                <input type="number" id="width" placeholder="100" onChange={ (e) => setBoxWidth(e.target.value +"px")}/></p>
                <p><button>Create New Box</button></p>
            </form>
        </fieldset>
    )
}

export default Form;
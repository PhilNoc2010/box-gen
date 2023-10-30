import React from 'react'

const Display = (props) => {
  return (
    <fieldset>
        <legend>Display.jsx</legend>
        <h1>Box Display</h1>

        <div className='d-flex'>
        {
          props.boxes.map((box, i) => {
            return <div style={{backgroundColor: box.color, height: box.height, width: box.width }} className='box' key={i}/>
          })
        }
        </div>

    </fieldset>
  )
};

export default Display;
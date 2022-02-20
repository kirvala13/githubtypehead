import React from 'react'
import "./Input.css"
function Input(props) {
  return (
    <div className='input-container'>
    <input type="text" placeholder='Search user' value={props.value} onChange={props.change} className="search-input" />
    <button ref={props.btnRef} onClick={props.searchClick} className="search-button">serach</button >
    </div>
  )
}

export default Input
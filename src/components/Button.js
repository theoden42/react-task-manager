import React from 'react'

const Button = (props) => {

  return (
    <button style={{backgroundColor: props.color}} className='btn' onClick={props.onClickevent}>
        {props.text}
    </button>
  )
}

export default Button
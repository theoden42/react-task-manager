import React from 'react'

const Button = ({ text, color, onAddbtn }) => {

  return (
    <button style={{backgroundColor: color}} className='btn' onClick={onAddbtn}>
        {text}
    </button>
  )
}

export default Button
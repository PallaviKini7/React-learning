import React from 'react'
import '../button/button.css'

function Button(props:any) {
  return (
    <div className='button'>{props.value}</div>
  )
}

export default Button
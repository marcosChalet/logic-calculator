import React from 'react'

import './index.css'

const btn = props => {

  let classes = 'btn '
  classes += props.enter ? 'enter' : ''

  return( 
    <button className={classes} 
    onClick={() => props.click && props.click(props.op)} >
    {props.op}
    </button>
  )
}

export default btn

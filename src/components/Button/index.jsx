import React from 'react'

import './index.css'

function btn(props) {
   
   let classes = 'btn '
   classes += props.enter ? 'enter' : ''

   return( 
      <button className={classes} 
      onClick={() => props.click && props.click(props.name)} >
         {props.name}
      </button>
   )
}

export default btn

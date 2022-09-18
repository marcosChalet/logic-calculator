import React from 'react'

import './index.css'

export default props => {
   
   let classes = 'btn '
   classes += props.enter ? 'enter' : ''

   return( 
      <button className={classes} 
      onClick={() => props.click && props.click(props.name)} >
         {props.name}
      </button>
   )
}

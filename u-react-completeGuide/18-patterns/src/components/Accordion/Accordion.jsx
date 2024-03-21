import React from 'react'

function Accordion({children, className}}) {
  return (
    <ul className={className}>{children}</ul>
  )
}

export default Accordion
import React from 'react';

function AccordionItem({className, children, title}) {

  return (
    <li className={className}>
        <h3>{title}</h3>
        <div>{childre}</div>
    </li>
  )
}

export default AccordionItem
import React from 'react'

import classes from './Card.module.css';

function Card(pros) {
  return (
    <div className={classes.card}>{pros.children}</div>
  )
}

export default Card
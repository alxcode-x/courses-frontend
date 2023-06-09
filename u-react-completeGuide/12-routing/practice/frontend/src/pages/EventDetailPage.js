import React from 'react'
import { useParams } from 'react-router-dom'

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>EventDetailPage</h1>
      <p>Event Id: {params.id}</p>
    </>
  )
}

export default EventDetailPage
import React from 'react'
import { useRouteLoaderData } from 'react-router-dom';
import EventForm from '../components/EventForm';

function NewEventPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <EventForm event={data} method="POST" />
  )
}

export default NewEventPage
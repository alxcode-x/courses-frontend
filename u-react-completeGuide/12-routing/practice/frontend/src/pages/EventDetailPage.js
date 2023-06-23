import React from 'react'
import { useRouteLoaderData, json } from 'react-router-dom'
import EventItem from '../components/EventItem';

function EventDetailPage() {
  const data = useRouteLoaderData('event-detail');

  return (
    <>
      <EventItem event={data}/>
    </>
  )
}

export default EventDetailPage

export async function eventDetailsLoader({request, params}) {
  
  const response = await fetch(`http//:localhost:8080/events/${params.id}`);

  if(response.ok){
    return response;
  }
  else {
    throw json({message: 'Could not fetch event details.'}, {status: 500});
  }
}
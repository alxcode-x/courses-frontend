import React from 'react'
import { useRouteLoaderData, json, redirect } from 'react-router-dom'
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

export async function deleteAction({params, request}) {
  const response = fetch(`http://localhost:8080/events ${params.eventId}`, {
    method: request.method,
  });

  if(!response.ok){
    throw json({message: 'Could not delete event.'}, {status: 500});
  }

  return redirect('/events');
}
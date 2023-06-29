import React, { Suspense } from 'react'
import { useRouteLoaderData, json, redirect, defer, Await } from 'react-router-dom'
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

function EventDetailPage() {
  const { event, events } = useRouteLoaderData('event-detail');

  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={event}>
          {(loadedEvent) => <EventItem event={loadedEvent} />}
        </Await>
      </Suspense>
      <Suspense fallback={<p>Loading...</p>}>
        <Await resolve={events}>
          {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
      </Suspense>
    </>
  )
}

export default EventDetailPage

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events1');
  if (response.ok) {
    const data = await response.json();
    return data.events;
  }
  else {
    throw new Response(JSON.stringify({ message: "No events found!" }), { status: 400 });
  }
}

const loadEvent = async (id) => {
  const response = await fetch(`http//:localhost:8080/events/${id}`);
  if (response.ok) {
    const data = response.json();
    return data.event;
  }
  else {
    throw json({ message: 'Could not fetch event details.' }, { status: 500 });
  }
}

export async function eventDetailsLoader({ request, params }) {
  defer({
    event: await loadEvent(params.id), //usign 'await' here, we can controll if loader will run before or after render the component. Here, the component will be rendered until loadEvents data is loaded.
    events: loadEvents(), // Here, without 'await', component will be rendered first and then the loaded will be executed.
  });
}

export async function deleteAction({ params, request }) {
  const response = fetch(`http://localhost:8080/events ${params.eventId}`, {
    method: request.method,
  });

  if (!response.ok) {
    throw json({ message: 'Could not delete event.' }, { status: 500 });
  }

  return redirect('/events');
}
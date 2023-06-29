import { Suspense } from 'react';
import { useLoaderData, defer, Await } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const { events } = useLoaderData();

  // Await will wait until events is resolved, then will execute the function to render EventsList.
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
      </Await>
    </Suspense>
  );

  // const data = useLoaderData();
  // return (
  //   <>
  //     <EventsList events={data.events} />
  //   </>
  // );
}

const loadEvents = async () => {
  const response = await fetch('http://localhost:8080/events1');
  if (response.ok) {
    // [1] const data = await response.json(); // since useLoaderDate retuns a promise that resolves a Request(), it's not necessary manage the response here.
    // return data;
    
    //[2] return response;

    //since we are using 'defer' we can't return the promise to be awaited by react-router-dom, instead we have to manually parse the response.
    const data = await response.json();
    return data.events;
  }
  else {
    throw new Response(JSON.stringify({ message: "No events found!" }), { status: 400 }); // by throwing an exception, the closest error page to this component, will be rendered
  }
}

const eventsLoader = async () => {
  return defer({
    events: loadEvents(),
  });
}

export default EventsPage;
export { eventsLoader };
import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const data = useLoaderData();

  return (
    <>
      <EventsList events={data.events} />
    </>
  );
}

const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events1');
  if (response.ok) {
    // const data = await response.json(); // since useLoaderDate retuns a promise that resolves a Request(), it's not necessary manage the response here.
    // return data;
    return response;
  }
  else {
    throw new Response(JSON.stringify({ message: "No events found!" }), { status: 400 });
  }
}

export default EventsPage;
export { eventsLoader };
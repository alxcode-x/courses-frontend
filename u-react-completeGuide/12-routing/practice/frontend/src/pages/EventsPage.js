import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

const eventsLoader = async () => {
  const response = await fetch('http://localhost:8080/events');
  if (response.ok) {
    const data = await response.json();
    return data.events;
  }
}

export default EventsPage;
export { eventsLoader };
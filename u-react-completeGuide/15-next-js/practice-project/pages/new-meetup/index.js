//domain.com/new-meetup
import { useRouter } from 'next/router';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

function NewMeetupPage() {
    const router = useRouter();

    const addMeetupHandler = async (enteredMeetupData) => {
        const response = await fetch('/api/new-meetup', {
            method: 'POST',
            body: JSON.stringify(enteredMeetupData),
            headers: {
                'Content-type': 'application/json'
            }
        });

        await response.json();
        router.push('/');
    };

    return <NewMeetupForm onAddMeetup={addMeetupHandler} />
}

export default NewMeetupPage;
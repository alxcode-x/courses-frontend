//domain.com/meetupId
import { MongoClient, ObjectId } from 'mongodb';
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetailsPage(props) {
    return (
        <MeetupDetail meetups={props.meetupData} />
    )
}

export async function getStaticPaths() {
    const client = await MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.kvz0sgn.mongodb.net/<collection>?retryWrites=true&w=majority"); //replace <> values
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray(); // Using find like this, we can get only IDs.
    client.close();

    return {
        falback: false, //false = all possible params are returned. true = not all possible params are returned, try to generate the page.
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() }
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId; // getStaticPaths must be defined to be able to use context.

    const client = await MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.kvz0sgn.mongodb.net/<collection>?retryWrites=true&w=majority"); //replace <> values
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const selectedMeetup = await meetupsCollection.findOne({_id: ObjectId(meetupId)});
    client.close();

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                title: selectedMeetup.title,
                address: selectedMeetup.address,
                description: selectedMeetup.description,
            }
        }
    }
}


export default MeetupDetailsPage;
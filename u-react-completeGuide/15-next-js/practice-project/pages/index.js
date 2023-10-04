//domain.com
import { MongoCliemt } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
    return <MeetupLis meetups={props.meetups}/>
};

// this is execute in build to be ready when the component is loaded, and every time is loaded again, it will be ready with the same data.
// better use if data is static or rarely changes.
export async function getStaticProps() { 
    // we can execute this code here instead of the api because getStatisPops also runs in the server.
    const client = await MongoClient.connect("mongodb+srv://<username>:<password>@cluster0.kvz0sgn.mongodb.net/<collection>?retryWrites=true&w=majority"); //replace <> values
    const db = client.db();
    const meetupsCollection = db.collection('meetups');
    const meetups = await meetupsCollection.find().toArray();
    client.close();

    return {
        props: { //this props are the props teh component receives
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10 // this will rexecute the function every 10 seconds after deployment. Use only if data is constantly changing.
    };
};

// this is executed in the server after deployment and every time the component is requested. This ensure the data is up to date.
// better use if data constantly changes.
// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             //something
//         }
//     };
// };

export default HomePage;
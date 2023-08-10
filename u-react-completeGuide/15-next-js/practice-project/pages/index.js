//domain.com
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
    return <MeetupLis meetups={props.meetups}/>
};

export async function getStaticProps() { // this is execute in build to be ready when the component is loaded.
    return {
        props: { //this props are the props teh component receives
            meetups: {
                // something
            }
        }
    }
}

export default HomePage;
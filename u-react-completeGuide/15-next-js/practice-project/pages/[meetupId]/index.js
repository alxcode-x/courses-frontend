//domain.com/meetupId
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetailsPage(props) {
    return (
        <MeetupDetail meetups={props.meetupData} />
    )
}

export async function getStaticPaths() {
    return {
        falback: false, //false = all possible params are returned. true = not all possible params are returned, try to generate the page.
        paths: [
            {
                params: {
                    meetupId: 'm1'
                }
            }, 
            {
                params: {
                    meetupId: 'm2'
                }
            },
        ]

    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId; // getStaticPaths must be defined to be able to use context.
    return {
        props: {
            meetupData: {
                id: meetupId,
                image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fopidesign.net%2Flandscape-architecture%2Flandscape-architecture-fun-facts%2F&psig=AOvVaw2pPyuCUMyWaLlwFgIgpwIS&ust=1691718770648000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiPw9X90IADFQAAAAAdAAAAABAE",
                title: "first meetup",
                address: "some address",
                description: "some description",
            }
        }
    }
}


export default MeetupDetailsPage;
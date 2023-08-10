//domain.com/meetupId
import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetailsPage (){
    return (
        <MeetupDetail 
            image="https://www.google.com/url?sa=i&url=https%3A%2F%2Fopidesign.net%2Flandscape-architecture%2Flandscape-architecture-fun-facts%2F&psig=AOvVaw2pPyuCUMyWaLlwFgIgpwIS&ust=1691718770648000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCLiPw9X90IADFQAAAAAdAAAAABAE"
            title="first meetup"
            address="some address"
            description="some description" />
    )
}

export default MeetupDetailsPage;
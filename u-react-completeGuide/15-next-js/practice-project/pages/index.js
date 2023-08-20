//domain.com
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
    return <MeetupLis meetups={props.meetups}/>
};

// this is execute in build to be ready when the component is loaded, and every time is loaded again, it will be ready with the same data.
// better use if data is static or rarely changes.
export async function getStaticProps() { 
    return {
        props: { //this props are the props teh component receives
            meetups: {
                // something
            }
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
import React from 'react'
import { useRouteError } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation'
import PageContent from '../components/PageContent'

function Error() {
    const error = useRouteError();
    let title;

    if(error.status === 400){
        title = "Not Found";
    }
    return (
        <>
            <MainNavigation />
            <PageContent title={title}>
                <p>{JSON.parse(error.data).message}</p>
            </PageContent >
        </>
    );
}

export default Error
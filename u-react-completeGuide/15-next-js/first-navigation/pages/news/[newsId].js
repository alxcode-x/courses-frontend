// domain.com/news/some-id
// adding [] in the file, we tell nextjs this page is dynamic.

import { useRouter } from 'next/router';

import React from 'react'

function DetailsPage() {
    const router = useRouter();

    console.log(router.query.newsId); // newsId is the name of the file
    return (
        <div>DetailsPage</div>
    )
}

export default DetailsPage
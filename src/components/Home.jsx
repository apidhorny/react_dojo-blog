import React, { useEffect, useState } from 'react';
import useFetch from '../useFetch';
import BlogList from './BlogList';
import Loading from './Loading';

const Home = () => {
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');

    return (
        <div className='home'>
            {error && <div>{error}</div>}
            {isLoading && <Loading />}
            {blogs && <BlogList blogs={blogs} title='All Blogs:' />}
        </div>
    );
};

export default Home;

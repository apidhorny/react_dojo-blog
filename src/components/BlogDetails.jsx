import React from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import Loading from './Loading';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className='blog-details'>
            {error && <div>{error}</div>}
            {isLoading && <Loading />}
            {blog && (
                <article>
                    <h2 className='blog-details__title'>{blog.title}</h2>
                    <p className='blog-details__author'>Written by {blog.author}</p>
                    <div className='blog-details__body'>{blog.body}</div>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;

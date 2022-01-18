import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useFetch from '../useFetch';
import Loading from './Loading';

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);

    const navigate = useNavigate();

    const deleteBlog = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE',
        }).then(() => {
            navigate('/');
        });
    };

    return (
        <div className='blog-details'>
            {error && <div>{error}</div>}
            {isLoading && <Loading />}
            {blog && (
                <article>
                    <h2 className='blog-details__title'>{blog.title}</h2>
                    <p className='blog-details__author'>Written by {blog.author}</p>
                    <div className='blog-details__body'>{blog.body}</div>
                    <button onClick={deleteBlog}>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;

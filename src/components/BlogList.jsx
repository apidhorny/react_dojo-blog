import React from 'react';
import { Link } from 'react-router-dom';

const BlogList = ({ blogs, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <Link to={`/blogs/${blog.id}`} key={blog.id}>
                    <div className='blog-preview'>
                        <h2 className='blog-preview__title'>{blog.title}</h2>
                        <p className='blog-preview__author'>Written by {blog.author}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
};

export default BlogList;

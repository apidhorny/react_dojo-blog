import React from 'react';

const BlogList = ({ blogs, title }) => {
    return (
        <div>
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className='blog-preview' key={blog.id}>
                    <h2 className='blog-preview__title'>{blog.title}</h2>
                    <p className='blog-preview__author'>Write by {blog.author}</p>
                </div>
            ))}
        </div>
    );
};

export default BlogList;

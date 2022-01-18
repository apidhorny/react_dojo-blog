import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

const CreateBlog = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        const newBlog = { title, body, author };
        setIsLoading(true);
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newBlog),
        }).then(() => {
            setIsLoading(false);
            navigate('/');
        });
    };

    return (
        <div className='create'>
            <h2>Add a New Blog</h2>
            <form onSubmit={formSubmit}>
                <label>Blog title:</label>
                <input type='text' required value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Blog body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <label>Blog author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value='Mario'>Mario</option>
                    <option value='Dario'>Dario</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <Loading />}
            </form>
        </div>
    );
};

export default CreateBlog;

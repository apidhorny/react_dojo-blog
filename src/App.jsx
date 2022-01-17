import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import BlogDetails from './components/BlogDetails';
import CreateBlog from './components/CreateBlog';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
    return (
        <BrowserRouter>
            <div className='App'>
                <Navbar />
                <div className='content'>
                    <Routes>
                        <Route path='/' element={<Home />} />
                        <Route path='/create' element={<CreateBlog />} />
                        <Route path='/blogs/:id' element={<BlogDetails />} />
                        <Route path='*' element={<Home />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

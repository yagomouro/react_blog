import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Post1 from './pages/Posts/Post1';
import Post2 from './pages/Posts/Post2';
import Post3 from './pages/Posts/Post3';
import Post4 from './pages/Posts/Post4';
import Post5 from './pages/Posts/Post5';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/posts/1' element={<Post1 />} />
        <Route path='/posts/2' element={<Post2 />} />
        <Route path='/posts/3' element={<Post3 />} />
        <Route path='/posts/4' element={<Post4 />} />
        <Route path='/posts/5' element={<Post5 />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

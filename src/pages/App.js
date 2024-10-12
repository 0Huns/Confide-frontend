import { Route, Routes } from 'react-router-dom';
import '../styles/App.css';
import Main from './Main';
import User from './User';
import Intro from './Intro';
import Auth from './Auth';
import PostDetail from '../component/PostDetail';
import Content from '../component/Content';
import NewPost from './../component/NewPost';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Intro />} />
      <Route path='auth' element={<Auth />} />
      <Route path='/main' element={<Main />} >
        <Route path='post' element={<Content />} />
        <Route path='newPost' element={<NewPost />} />
        <Route path='post/:id' element={<PostDetail />} />
        <Route path='user' element={<User />} />
      </Route>
    </Routes>
  );
}

export default App;

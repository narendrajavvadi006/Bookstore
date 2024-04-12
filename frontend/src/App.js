import logo from './logo.svg';
import { useEffect } from 'react'
import axios from 'axios'
import './App.css';
import {Route,Routes} from 'react-router-dom'
import Home from './pages/Home';
import CreateBookk from './pages/CreateBookk';
import EditBook from './pages/EditBook';
import ShowBook from './pages/ShowBook';
import DeleteBook from './pages/DeleteBook';

function App() {
 
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/books/create' element={<CreateBookk />} />
        <Route path='/books/edit/:id' element={<EditBook />} />
        <Route path='/books/details/:id' element={<ShowBook />} />
        <Route path='/books/delete/:id' element={<DeleteBook />} />
      </Routes>
    </div>
  );
}

export default App;

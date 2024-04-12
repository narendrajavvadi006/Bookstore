import React, { useEffect, useState } from 'react'

import axios from 'axios'
import Spinner from '../components/Spinner'
import {Link} from 'react-router-dom'


export default function Home() {
  var [books, setBooks] = useState([])
  var [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true)
    axios.get('http://localhost:5011/books').then((res) => {
      setBooks(res.data);
      console.log(res.data);
      setLoading(false)
    }).catch((error) => {
        console.log(error);
      });
    
    
  },[])
  return (
    <div className='p-4'container >
      <div className='d-flex justify-content-between py-5 px-2'>
        <h2>Books List</h2>
        <Link to={`/books/create`} className='fs-2'>
          <i class='bi bi-bag-plus'></i>
        </Link>
      </div>
      {loading ? (
        <>
          <Spinner />
        </>
      ) : (
        <table className='w-100'>
          <thead>
            <tr className='text-center'>
              <th className='border border-2'>No</th>
              <th className='border border-2'>Title</th>
              <th className='border border-2'>Author</th>
              <th className='border border-2'>PublishYear</th>
              <th className='border border-2'>Operations</th>
            </tr>
            </thead>
            <tbody>
              {
                books.map((book, index) => {
                 return (
                   <tr className='text-center'>
                     <td className='border border-2'>{index + 1}</td>
                     <td className='border border-2'>{book.title}</td>
                     <td className='border border-2'>{book.author}</td>
                     <td className='border border-2'>{book.publishYear}</td>
                     <td className='border border-2'>
                       <div className='d-flex justify-content-around'>
                         <Link to={`/books/details/${book._id}`}>
                           <i class='bi bi-info-circle-fill'></i>
                         </Link>
                         <Link to={`/books/edit/${book._id}`}>
                           <i class='bi bi-pencil-square'></i>
                         </Link>
                         <Link to={`/books/delete/${book._id}`}>
                           <i class='bi bi-trash3-fill'></i>
                         </Link>
                       </div>
                     </td>
                   </tr>
                 );
                  
                })
              }
            </tbody>
        </table>
      )}
    </div>
  );
}

import React, { useEffect, useState } from 'react'
import Goback from '../components/Goback'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Spinner from "../components/Spinner"

// import Goback from '../components/Goback';

export default function ShowBook() {
  var [book, setBook] = useState({})
  var [loading, setLoading] = useState(false);
  var { id } = useParams()
  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5011/books/${id}`)
      .then((res) => {
        console.log(res.data);
        setBook(res.data);

        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  },[])
  return (
    <div className='p-4'>
      <Goback />
      <h2>Show Book</h2>
      {loading ? (
        <Spinner />
      ) : (
        <div className=' row px-3 py-4 border border-2 bg-info '>
          <div className='col-9'>
            <div className='p-2'>
              <span className='fw-bold'>id:</span>
              <span>{book._id}</span>
            </div>
            <div className='p-2'>
              <span className='fw-bold'>Title : </span>
              <span>{book.title}</span>
            </div>
            <div className='p-2'>
              <span className='fw-bold'>Author: </span>
              <span>{book.author}</span>
            </div>

            <div className='p-2'>
              <span className='fw-bold'>PublishYear: </span>
              <span>{book.publishYear}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

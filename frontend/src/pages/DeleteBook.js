import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Goback from '../components/Goback'
import Spinner from '../components/Spinner'
// import { useSnackbar } from 'notistack';
import axios from 'axios'
// import { useSnackbar } from 'notistack'
import { enqueueSnackbar, useSnackbar } from 'notistack';

export default function DeleteBook() {
  var [loading, setLoading] = useState(false)
  var navigate = useNavigate()
  var { id } = useParams()
  var handleDeleteBook = async () =>{
    setLoading(true)
    await axios.delete(`http://localhost:5011/books/${id}`).then((res) => {
      console.log(res);
      enqueueSnackbar('BooK Deleted  SuccessFully', { variant: 'success' });
      setLoading(false);

      navigate('/');
    }).catch((error) => {
       enqueueSnackbar('Error', { variant: 'error' });
      setLoading(false)
      console.log(error)
    })
  }
  return (
    <div className='p-4'>
      <Goback />
      <h2 className='py-3'>Delete Book</h2>
      {loading ? <Spinner /> : ''}
      <div className='py-4 border border-3 w-50 d-flex flex-column'>
        <div className='d-flex flex-column justify-content-center'>
          <button onClick={handleDeleteBook} className='btn btn-danger m-auto'>
            Delete
          </button>

          <p>Are you sure to delete </p>
          
          
        </div>
      </div>
    </div>
  );
}

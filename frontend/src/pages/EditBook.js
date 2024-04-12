import React, { useEffect, useState } from 'react';
import Goback from '../components/Goback';
import Spinner from '../components/Spinner';
import { useSnackbar } from 'notistack';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export default function EditBook() {
  var [title, setTitle] = useState('');
  var [author, setAuthor] = useState('');
  var [publishYear, setPublishYear] = useState('');
  var [loading, setLoading] = useState(false);
  var { id } = useParams()
  const { enqueueSnackbar } = useSnackbar();
  // console.log(myid)
  // var bookId=myid.trim()
  var navigate = useNavigate();
  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://localhost:5011/books/${id}`)
      .then((res) => {
        console.log(res);
        setTitle(res.data.title);
        setAuthor(res.data.author);
        setPublishYear(res.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  },[])

  var handleBookEdit = () => {
    var data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .put(`http://localhost:5011/books/${id}`, data)
      .then(() => {
        setLoading(false);
         enqueueSnackbar('Book Edited successfully', { variant: 'success' });
        navigate('/');
      })
      .catch((error) => {
        setLoading(false)
         enqueueSnackbar('Error', { variant: 'error' });
        console.log(error);
      });
  };
  return (
    <div className='p-5'>
      <Goback />
      <h3 className='mt-3'>Create Book</h3>
      {loading ? <Spinner /> : ''}
      <div className='row mt-4 container'>
        <div className='col-6 m-auto border border-2 border-dark px-4 py-2 '>
          <div class='mb-3 mt-3'>
            <label for='email' class='form-label'>
              Title:
            </label>
            <input
              type='email'
              className='form-control border border-2 border-secondary'
              id='email'
              placeholder='Enter Title'
              name='email'
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div class='mb-3 mt-3'>
            <label for='email' class='form-label'>
              Author:
            </label>
            <input
              type='email'
              className='form-control border border-2 border-secondary'
              id='email'
              placeholder='Enter Author'
              name='email'
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>
          <div class='mb-3 mt-3'>
            <label for='email' class='form-label'>
              PublishYear:
            </label>
            <input
              type='email'
              className='form-control border border-2 border-secondary'
              id='email'
              placeholder='Enter Publishyear'
              name='email'
              value={publishYear}
              onChange={(e) => setPublishYear(e.target.value)}
            />
          </div>
          <button
            onClick={handleBookEdit}
            className='btn btn-primary w-75 m-auto px-5'
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

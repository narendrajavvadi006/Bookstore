import React from 'react'
import { Link } from 'react-router-dom'

export default function Goback() {
  // var navigate= useNavigate()
  return (
    <Link to='/'>
      <button  className='btn btn-primary'>
        Go back
      </button>
    </Link>
  )
}

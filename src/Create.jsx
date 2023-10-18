import React, { useState } from 'react'
import { addUser } from './UserReducer'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const users = useSelector((state) => state.users)

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addUser({ id: users[users.length - 1].id + 1, name, email }))
    navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border rounded-4 bg-dark bg-gradient text-white p-5">
        <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input className='form-control' type="text" name="name" placeholder="Full Name" onChange={e => setName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="name">Email:</label>
            <input className='form-control' type="text" name="name" placeholder="Email Address" onChange={e => setEmail(e.target.value)} />
          </div> <br />
          <button className='btn btn-success'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
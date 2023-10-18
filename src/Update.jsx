import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from './UserReducer'


const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const exisitingUser = users.filter(user => user.id == id);

  const { name, email } = exisitingUser[0];

  const [updateName, setUpdateName] = useState(name)
  const [updateEmail, setUpdateEmail] = useState(email)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser({
      id: id,
      name: updateName,
      email: updateEmail,
    }))
    navigate('/')
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className="w-50 border rounded-4 bg-dark bg-gradient text-white p-5">
        <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
          <div>
            <label htmlFor="name">Name:</label>
            <input className='form-control' type="text" name="name" placeholder="Full Name" value={updateName} onChange={e => setUpdateName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="name">Email:</label>
            <input className='form-control' type="text" name="name" placeholder="Email Address" value={updateEmail} onChange={e => setUpdateEmail(e.target.value)} />
          </div> <br />
          <button className='btn btn-success'>Update</button>
        </form>
      </div>
    </div>
  )
}

export default Update
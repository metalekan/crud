import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import {Link} from 'react-router-dom';
import { deleteUser } from './UserReducer';


const Home = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  
  const handleDelete = (id) => {
    dispatch(deleteUser({id: id}))
  }

  return (
    <>
      <div className='container bg-dark bg-gradient text-white text-center rounded-3  mt-2 py-3'>
        <h1>CRUD APP</h1>
  
        <Link to='/create' className='btn btn-success bg-gradient my-3 fw-bold'>Create +</Link>
  
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {
              users.map((item, index) => (
                <tr key={index}>
                  <th>{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`/edit/${item.id}`} className='btn btn-sm btn-success'>Edit</Link>
                    <button onClick={()=> handleDelete(item.id)} className='btn btn-sm btn-danger ms-2'>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default Home
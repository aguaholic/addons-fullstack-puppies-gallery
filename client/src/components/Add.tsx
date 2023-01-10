import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AppContext, Data } from '../AppProvider';

const Add = () => {
  const { newPuppy, setNewPuppy } = useContext(AppContext) as Data;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPuppy({
      ...newPuppy,
      [e.target.name]: e.target.value,
    })
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await axios.post('/api/puppies', newPuppy);
    } catch (error) {
      console.error();
    }
  }

  return (
    <>
      <div className='flex justify-end mt-5 mr-5'>
        <Link
          to='/'
          className='shadow bg-gray-300 hover:bg-grey-200 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
        >
          Home
        </Link>
      </div>
      <div className='flex justify-center mt-5'>
        <form
          onSubmit={e => handleSubmit(e)}
          className='w-full max-w-lg'
        >
          <div className='md:w-2/3 mb-5'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='name'
              type='text'
              placeholder='Name'
              onChange={e => handleChange(e)}
            />
          </div>
          <div className='md:w-2/3 mb-5'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='breed'
              type='text'
              placeholder='Breed'
              onChange={e => handleChange(e)}
            />
          </div>
          <div className='md:w-2/3 mb-5'>
            <input
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              name='birthDate'
              type='text'
              placeholder='Birth Year'
              onChange={e => handleChange(e)}
            />
          </div>
          <div className='md:w-2/3 mb-5'>
            <button
              className='shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded'
              type='submit'
            >
              Add puppy
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default Add;

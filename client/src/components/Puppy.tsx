import { useContext, useEffect, useState } from 'react';
import { useParams, redirect, Link } from 'react-router-dom';
import axios from 'axios';
import { AppContext, Data } from '../AppProvider';
import Header from './Header';

const Puppy = () => {
  const { id } = useParams();
  const { puppy, setPuppy, puppies, setPuppies } = useContext(AppContext) as Data;
  const [isEditMode, setIsEditMode] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  useEffect(() => {
    const getPuppy = async () => {
      await fetch(`/api/puppies/${id}`)
        .then(res => res.json())
        .then(data => setPuppy(data));
    };

    getPuppy();
  }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setPuppy({
  //     ...puppy,
  //     [e.target.name]: e.target.value,
  //   })
  // };

  const handleEdit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setIsEditMode(true);
  }

  const handleEditConfirm = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number | undefined) => {
    e.preventDefault();

    try {
      await axios.put(`/api/puppies/${id}`, puppy);
      setIsEditMode(false);
    } catch (err) {
      console.error(err);
    }
  }

  const handleDelete = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number | undefined) => {
    e.preventDefault();

    try {
      const res = await axios.delete(`/api/puppies/${id}`);
      setPuppy(res.data);

    } catch (err) {
      console.log(err)
    }

    const newPuppies = puppies.filter(puppy => puppy.id !== id);
    setPuppies(newPuppies);
    setIsRemoved(true);
  };

  return (
    <>
      <Header />
      {isRemoved ? (
        <div className='m-auto'>
          <div className='bg-white px-20 py-12 rounded-md text-center'>
            <h1 className='text-xl mb-12 font-bold text-slate-500'>Successfully removed 👍</h1>
            <Link to='/' className='bg-red-600 px-7 py-2 ml-2 rounded-md text-md text-white font-semibold'>
              go home
            </Link>
          </div>
        </div>
      ) : (

        <div className='m-auto'>
          <div className='max-w-sm m-auto rounded overflow-hidden shadow-lg mt-10'>
            <img className='w-full' src={puppy?.image} alt={puppy?.name} />
            <div className='px-6 py-4'>
              <p className='text-gray-700 text-base'>
                <span className='font-bold text-lg mb-2'>name:</span> {puppy?.name}
              </p>
              <p className='text-gray-700 text-base'>
                <span className='font-bold text-lg mb-2'>breed:</span> {puppy?.breed}
              </p>
              <p className='text-gray-700 text-base'>
                <span className='font-bold text-lg mb-2'>birth year:</span> {puppy?.birthDate}
              </p>
            </div>
            <div className='flex justify-between'>
              <button
                className='shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-2 mb-5 ml-2'
                onClick={(e) => handleEdit(e)}
              >
                edit
              </button>
              <button
                className='shadow bg-red-500 hover:bg-red-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mt-2 mb-5 mr-2'
                onClick={(e) => handleDelete(e, puppy?.id)}
              >
                remove
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Puppy;

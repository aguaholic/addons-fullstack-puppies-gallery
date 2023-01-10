import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Puppy as PuppyType } from '../../../types';

const Puppy = () => {
  const [puppy, setPuppy] = useState<PuppyType>({} as PuppyType);
  const { id } = useParams();

  useEffect(() => {
    const getPuppy = async () => {
      await fetch(`/api/puppies/${id}`)
        .then(res => res.json())
        .then(data => setPuppy(data));
    };

    getPuppy();
  }, []);

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
      <div className='m-auto'>
        <div className='max-w-sm m-auto rounded overflow-hidden shadow-lg mt-10'>
          <img className='w-full' src={puppy.image} alt={puppy.name} />
          <div className="px-6 py-4">
            <p className='text-gray-700 text-base'>
              <span className='font-bold text-lg mb-2'>name:</span> {puppy.name}
            </p>
            <p className='text-gray-700 text-base'>
              <span className='font-bold text-lg mb-2'>breed:</span> {puppy.breed}
            </p>
            <p className='text-gray-700 text-base'>
              <span className='font-bold text-lg mb-2'>birth year:</span> {puppy.birthDate}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Puppy;

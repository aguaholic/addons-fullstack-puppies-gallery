import { Link } from 'react-router-dom';
import { Puppy } from '../../../types';

interface CardProps {
  puppy: Puppy;
}

const Card = ({ puppy }: CardProps) => {

  return (
    <Link to={`/puppies/${puppy.id}`} className=''>
      <div className='max-w-sm m-auto rounded overflow-hidden shadow-lg mt-3'>
        <img src={puppy.image} alt={puppy.name} />
        <div className='px-6 py-4'>
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
    </Link>
  )
};

export default Card;
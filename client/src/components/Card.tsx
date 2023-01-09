import { Link } from 'react-router-dom';
import { Puppy } from '../../../types';

interface CardProps {
  puppy: Puppy;
}

const Card = ({ puppy }: CardProps) => {
  return (
    <Link to={`/puppy/${puppy.id}`} className='border-8 rounded-sm'>
      <img src={puppy.image} alt={puppy.name} />
      <p>name: {puppy.name}</p>
      <p>breed: {puppy.breed}</p>
      <p>bday: {puppy.birthDate}</p>
    </Link>
  )
};

export default Card;
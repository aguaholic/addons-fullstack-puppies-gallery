import { useEffect, useState } from 'react';
import Card from './Card';
import { Puppy } from '../../../types';

const Cards = () => {
  const [puppies, setPuppies] = useState<Puppy[]>([]);

  useEffect(() => {
    const getPuppies = async () => {
      await fetch('/api/puppies')
        .then(res => res.json())
        .then(data => setPuppies(data.db));
    };

    getPuppies();
  }, []);

  return (
    <div className='columns-2 md:columns-3 lg:columns-4'>
      {puppies?.map((puppy: Puppy): any =>
        <div key={puppy.id}>
          <Card puppy={puppy} />
        </div>
      )}
    </div>
  )
};

export default Cards;

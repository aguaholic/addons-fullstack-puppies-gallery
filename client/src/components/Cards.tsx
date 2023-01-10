import { useContext, useEffect } from 'react';
import { AppContext, Data } from '../AppProvider';
import { Puppy } from '../../../types';
import Card from './Card';

const Cards = () => {
  const { puppies, setPuppies } = useContext(AppContext) as Data;

  useEffect(() => {
    const getPuppies = async () => {
      await fetch('/api/puppies')
        .then(res => res.json())
        .then(data => setPuppies(data.db));
    };

    getPuppies();
  }, []);
  console.log('context', puppies);

  return (
    <div className='columns-2 md:columns-3 lg:columns-4'>
      {puppies.map((puppy: Puppy): any =>
        <div key={puppy.id}>
          <Card puppy={puppy} />
        </div>
      )}
    </div>
  )
};

export default Cards;

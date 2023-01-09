import axios from 'axios';
import * as dotenv from 'dotenv';
import { Puppy } from './types';

dotenv.config();

const ACCESS_KEY = process.env.ACCESS_KEY;

export const nextId = (puppiesDb: Puppy[]) => {
  const highestId: number = puppiesDb.reduce(
    (accumulator, currentValue) => (currentValue.id > accumulator ? currentValue.id : accumulator),
    0
  );

  return highestId + 1;
};

export const getPuppyImage = async (breed: string) => {
  try {
    const image = await axios.get(`https://api.unsplash.com/search/images?client_id=${ACCESS_KEY}&page=1&query=${breed}`);

    return image.data.results[0].urls.small;
  } catch (error) {
    console.error();
  }
};

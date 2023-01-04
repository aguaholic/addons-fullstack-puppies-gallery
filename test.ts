import request from 'supertest';
import app from './app';
import { db } from './db';
import { nextId } from './utils';
import { Puppy } from './types';

describe('Testing api endpoint', () => {
  test('sanity check for /test', async () => {
    const res = await request(app).get('/api/test');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      test: 'it works as it should',
    });
  });
});

describe('API', () => {
  test('get all puppies', async () => {
    const res = await request(app).get('/api/puppies');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({
      db: db
    });
  });

  test('get one puppy', async () => {
    const res = await request(app).get('/api/puppies/4');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(  {
      id: 4,
      breed: 'Dachshund',
      name: 'Jackie',
      birthDate: 2013
    });
  });

  test('create puppy', async () => {
    const puppy: Puppy = {
      id: nextId(db),
      breed: 'Labradoodle',
      name: 'Bobby',
      birthDate: 2023,
    };

    const res = await request(app)
      .post('/api/puppies')
      .send(puppy);

    expect(res.statusCode).toEqual(201);
    expect(db.length).toBe(7);
  });

  test('modify puppy', async () => {

    const res = await request(app)
      .put('/api/puppies/2')
      .send({
        name: 'Lilia',
        breed: 'Labrador',
        birthDate: 2017,
      });

    expect(res.statusCode).toEqual(200);
  });

  test('remove puppy', async () => {
    const res = await request(app).delete('/api/puppies/3');
    expect(res.statusCode).toEqual(200);

    expect(db).not.toContain({
      id: 3,
      breed: 'Yorkshire',
      name: 'Milos',
      birthDate: 2018,
    })
  });
});
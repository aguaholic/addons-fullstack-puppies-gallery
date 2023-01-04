import e from "express"

export interface Puppy {
  id: number,
  breed: string,
  name: string,
  birthDate: number,
};

export interface RequestBody<T> extends Express.Request {
  body: T
}

export interface ResquestPuppy {
  breed: string,
  name: string,
  birthDate: number,
}

export interface Puppy {
  id: number,
  breed: string,
  name: string,
  birthDate: number,
  image: string,
};

export interface RequestBody<T> extends Express.Request {
  body: T
}

export interface ResquestPuppy {
  breed: string,
  name: string,
  birthDate: number,
  image: string,
}

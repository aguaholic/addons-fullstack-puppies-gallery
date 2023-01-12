import React, { useState, createContext } from 'react';
import { Puppy } from '../../types';
export interface Data {
  puppies: Puppy[],
  setPuppies: React.Dispatch<React.SetStateAction<Puppy[]>>,
  puppy: Puppy | undefined,
  setPuppy: React.Dispatch<React.SetStateAction<Puppy | undefined>>,
  newPuppy: Puppy,
  setNewPuppy: React.Dispatch<React.SetStateAction<Puppy>>,
}

const AppContext = createContext<Data | null>(null);

const AppProvider = ({ children }: any) => {
  const [puppies, setPuppies] = useState<Puppy[]>([]);
  const [puppy, setPuppy] = useState<Puppy>();
  const [newPuppy, setNewPuppy] = useState<Puppy>({} as Puppy);

  return (
    <AppContext.Provider value={{
      puppies,
      setPuppies,
      puppy,
      setPuppy,
      newPuppy,
      setNewPuppy,
    }}>
      {children}
    </AppContext.Provider>
  )
};

export { AppContext, AppProvider };
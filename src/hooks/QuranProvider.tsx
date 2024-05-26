import React, { createContext, useState } from 'react';
import QuranJsonData from '../assets/db/quran-json-min.json';

interface Ayah {
  index: string;
  text: string;
  bismillah?: string;
}

interface Sura {
  name: string;
  index: string;
  aya: Ayah[];
}

interface Quran {
  sura: Sura[];
}

interface UserContextType {
  quran: Quran;
  setQuran: React.Dispatch<React.SetStateAction<Quran>>;
}

interface QuranProviderProps {
  children: React.ReactNode;
}

// Create a context
const QuranContext = createContext<UserContextType | undefined>(undefined);

const QuranProvider = ({ children }: QuranProviderProps) => {
  const [quran, setQuran] = useState<Quran>(QuranJsonData);

  return (
    <QuranContext.Provider value={{ quran, setQuran }}>{children}</QuranContext.Provider>
  );
};

export { QuranContext, QuranProvider };

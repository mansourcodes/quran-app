import React, { createContext, useState } from 'react';

interface QuranProviderProps {
  children: React.ReactNode;
}

// Create a context
const QuranContext = createContext<any>(undefined);

const QuranProvider = ({ children }: QuranProviderProps) => {
  const [quran, setQuran] = useState({ name: 'John Doe', age: 30 });

  return (
    <QuranContext.Provider value={{ quran, setQuran }}>{children}</QuranContext.Provider>
  );
};

export { QuranContext, QuranProvider };

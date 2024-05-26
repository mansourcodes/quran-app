import { IonList } from '@ionic/react';
import React, { useContext } from 'react';
import SuraListItem from './SuraListItem';
import { QuranContext } from '../hooks/QuranProvider';
const SuraList = () => {
  const context = useContext(QuranContext);

  if (!context) {
    throw new Error('SuraList must be used within a QuranProvider');
  }

  const { quran } = context;

  return (
    <>
      {quran.sura.map((sura) => (
        <>
          <SuraListItem sura={sura} key={sura.name} />
        </>
      ))}
    </>
  );
};

export default SuraList;

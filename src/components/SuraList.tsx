import { IonItem, IonLabel, IonList } from '@ionic/react';
import React, { useContext } from 'react';
import SuraListItem from './SuraListItem';
import { QuranContext } from '../hooks/QuranProvider';
const SuraList = () => {
  const context = useContext(QuranContext);

  if (!context) {
    throw new Error('SuraList must be used within a QuranProvider');
  }

  const { quran } = context;
  console.log(quran);
  return (
    <>
      <IonList lines="full">
        {Array(80)
          .fill(0)
          .map((i) => (
            <>
              <SuraListItem />
            </>
          ))}
      </IonList>{' '}
    </>
  );
};

export default SuraList;

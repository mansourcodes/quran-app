import { IonItem, IonLabel, IonList } from '@ionic/react';
import React from 'react';
import SuraListItem from './SuraListItem';
const SuraList = () => {
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

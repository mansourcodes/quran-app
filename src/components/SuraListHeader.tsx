import { IonIcon, IonItem, IonLabel } from '@ionic/react';
import React from 'react';
import { bookmark } from 'ionicons/icons';
const SuraListHeader = () => {
  return (
    <>
      <div className="w-full flex flex-row items-start justify-start text-center">
        <div className="bg-blue-500 w-[32px] py-2 ">
          <IonIcon icon={bookmark} />
        </div>

        <div className="w-full py-2 bg-orange-100 flex flex-row items-center justify-between">
          <div className="bg-green-500 w-full">(--------)</div>
        </div>
      </div>
    </>
  );
};

export default SuraListHeader;

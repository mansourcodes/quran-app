import { IonItem, IonLabel } from '@ionic/react';
import React from 'react';
const SuraListItem = () => {
  return (
    <>
      <div className="w-full flex flex-row items-start justify-start text-center">
        <div className="bg-blue-500 w-[32px] py-2 ">B</div>

        <div className="w-full py-2 bg-orange-100 flex flex-row items-center justify-between">
          <div className="bg-red-500">1</div>
          <div className="bg-green-500">alkawther</div>
          <div className="bg-red-500">1</div>
        </div>
      </div>
    </>
  );
};

export default SuraListItem;

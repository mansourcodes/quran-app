import React from 'react';
import { Ayah } from '../utils/types';
import { IonRippleEffect } from '@ionic/react';
const AyahListItem = ({ aya }: { aya: Ayah }) => {
  return (
    <>
      <div
        className={
          (parseInt(aya.index) % 2 == 0 ? 'bg-orange-200/50' : 'bg-orange-200/90') +
          ' w-full flex  relative overflow-hidden  ion-activatable '
        }
      >
        <div className="py-2 w-20 text-center bg-slate-400/70">{aya.index}</div>
        <div className="p-2 w-full text-right">
          {aya.bismillah && (
            <>
              <div className="text-center">{aya.bismillah}</div>
              <br />
            </>
          )}

          {aya.text}
        </div>
        <IonRippleEffect></IonRippleEffect>
      </div>
    </>
  );
};

export default AyahListItem;

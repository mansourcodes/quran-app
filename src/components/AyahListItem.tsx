import React from 'react';
import { Ayah } from '../utils/types';
const AyahListItem = ({ aya }: { aya: Ayah }) => {
  return (
    <>
      <div
        className={
          (parseInt(aya.index) % 2 == 0 ? 'bg-orange-200' : 'bg-orange-400') +
          ' w-full flex  '
        }
      >
        <div className="py-2 w-20 text-center bg-slate-400">{aya.index}</div>
        <div className="p-2 w-full text-right">
          {aya.bismillah && (
            <>
              <div className="text-center">{aya.bismillah}</div>
              <br />
            </>
          )}

          {aya.text}
        </div>
      </div>
    </>
  );
};

export default AyahListItem;

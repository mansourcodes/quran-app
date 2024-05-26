import React from 'react';
import { Sura } from '../utils/types';
const SuraListItem = ({ sura }: { sura: Sura }) => {
  return (
    <>
      <div className="w-full flex flex-row items-start justify-start text-center">
        <div className="bg-blue-500 w-[40px] py-2 ">B</div>

        <div className="w-full py-2 bg-orange-100 flex flex-row items-center justify-between">
          <div className="bg-red-500 w-[40px]">{sura.index}</div>
          <div className="bg-green-500 w-full">{sura.name}</div>
          <div className="bg-red-500 w-[40px]">{sura.aya.length}</div>
        </div>
      </div>
    </>
  );
};

export default SuraListItem;

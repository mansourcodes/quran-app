import React from 'react';
import { Sura } from '../utils/types';
import { Link } from 'react-router-dom';
import { IonRippleEffect } from '@ionic/react';
const SuraListItem = ({ sura }: { sura: Sura }) => {
  return (
    <>
      <Link to={'/sura/' + sura.index}>
        <div className="w-full flex flex-row items-start justify-start text-center relative overflow-hidden">
          <div className="bg-[#1e81b0] text-[#1e81b0] w-[40px] py-2  ">. </div>

          <div className="w-full py-2 bg-orange-100 flex flex-row items-center justify-between">
            <div className=" w-[40px]">{sura.index}</div>
            <div className=" w-full">{sura.name}</div>
            <div className="color-muted-font w-[40px]">{sura.aya.length}</div>
          </div>
          <IonRippleEffect></IonRippleEffect>
        </div>
      </Link>
    </>
  );
};

export default SuraListItem;

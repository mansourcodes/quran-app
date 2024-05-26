import React from 'react';
import AyahListItem from './AyahListItem';
import { Ayah } from '../utils/types';

const AyahList = ({ ayah }: { ayah: Ayah[] | undefined }) => {
  return (
    <>
      {ayah?.map((aya) => (
        <AyahListItem aya={aya} key={aya.index} />
      ))}
    </>
  );
};

export default AyahList;

import React from 'react';
import { Ayah } from '../utils/types';
const AyahListItem = ({ aya }: { aya: Ayah }) => {
  return (
    <>
      {aya.bismillah && (
        <>
          <div>{aya.bismillah}</div>
          <br />
        </>
      )}
      <div>{aya.text}</div>
    </>
  );
};

export default AyahListItem;

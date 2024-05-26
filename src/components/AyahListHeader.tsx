import React from 'react';
const AyahListHeader = ({ suraName }: { suraName: string }) => {
  return (
    <>
      <div className="w-full py-3 text-center font-bold bg-slate-400">{suraName}</div>
    </>
  );
};

export default AyahListHeader;

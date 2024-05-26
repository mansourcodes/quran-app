import React, { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import AyahList from '../components/AyahList';
import { QuranContext } from '../hooks/QuranProvider';
import AyahListHeader from '../components/AyahListHeader';

interface SuraPageProps
  extends RouteComponentProps<{
    id: string;
  }> {
  index?: string;
}

const SuraPage: React.FC<SuraPageProps> = ({ match }) => {
  const context = useContext(QuranContext);

  if (!context) {
    throw new Error('SuraPage must be used within a QuranProvider');
  }

  const { quran } = context;

  const sura = quran.sura.find((sura) => sura.index === match.params.id);

  return (
    <>
      <div>sura index {match.params.id}</div>
      {sura && <AyahListHeader suraName={sura?.name} />}
      {sura && <AyahList ayah={sura?.aya} />}
    </>
  );
};

export default SuraPage;

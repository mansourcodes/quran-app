import React from 'react';
import { RouteComponentProps } from 'react-router';

interface SuraPageProps
  extends RouteComponentProps<{
    id: string;
  }> {
  index?: string;
}

const SuraPage: React.FC<SuraPageProps> = ({ match }) => {
  return (
    <>
      <div>sura index {match.params.id}</div>
    </>
  );
};

export default SuraPage;

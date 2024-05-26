import React, { useContext } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import AyahList from '../components/AyahList';
import { QuranContext } from '../hooks/QuranProvider';
import AyahListHeader from '../components/AyahListHeader';
import SuraListHeader from '../components/SuraListHeader';
import { ellipsisHorizontal, ellipsisVertical } from 'ionicons/icons';

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
    <IonPage>
      <IonHeader translucent={true} class="no-shadow">
        <IonToolbar>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" icon={ellipsisVertical}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Quran</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen={true}>
        {sura && <AyahListHeader suraName={sura?.name} />}
        {sura && <AyahList ayah={sura?.aya} />}{' '}
      </IonContent>
    </IonPage>
  );
};

export default SuraPage;

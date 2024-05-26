import React from 'react';
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
import {
  ellipsisHorizontal,
  ellipsisVertical,
  search,
  personCircle,
} from 'ionicons/icons';
import SuraList from '../components/SuraList';
import SuraListHeader from '../components/SuraListHeader';

const IndexPage = () => {
  return (
    <IonPage>
      <IonHeader translucent={true} class="no-shadow">
        <IonToolbar>
          <IonButtons slot="secondary">
            <IonButton>
              <IonIcon slot="icon-only" icon={personCircle}></IonIcon>
            </IonButton>
            <IonButton>
              <IonIcon slot="icon-only" icon={search}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonButtons slot="primary">
            <IonButton>
              <IonIcon slot="icon-only" icon={ellipsisVertical}></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Quran</IonTitle>
        </IonToolbar>
        <SuraListHeader />
      </IonHeader>

      <IonContent className="p-0 m-0">
        <SuraList />
      </IonContent>
    </IonPage>
  );
};

export default IndexPage;

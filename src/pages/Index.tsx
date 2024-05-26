import React from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonButtons,
  IonIcon,
} from '@ionic/react';
import {
  create,
  ellipsisHorizontal,
  ellipsisVertical,
  helpCircle,
  search,
  personCircle,
  star,
} from 'ionicons/icons';
import SuraList from '../components/SuraList';
import SuraListItem from '../components/SuraListItem';
import SuraListHeader from '../components/SuraListHeader';

const IndexPage = () => {
  return (
    <IonPage>
      <IonHeader translucent={true}>
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
              <IonIcon
                slot="icon-only"
                ios={ellipsisHorizontal}
                md={ellipsisVertical}
              ></IonIcon>
            </IonButton>
          </IonButtons>
          <IonTitle>Quran</IonTitle>
        </IonToolbar>
        <SuraListHeader />
      </IonHeader>

      <IonContent fullscreen={true}>
        <SuraList />
      </IonContent>
    </IonPage>
  );
};

export default IndexPage;

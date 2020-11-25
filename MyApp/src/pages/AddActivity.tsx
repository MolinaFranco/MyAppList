import { IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonGrid, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonSegment, IonSegmentButton, IonTitle, IonToast, IonToolbar } from '@ionic/react';
import React, {useRef, useContext, useState} from 'react';
import {IonHeader} from '@ionic/react'
import ActivitiesContext, { ActivityType } from '../data/activities-context';

import {useHistory} from 'react-router-dom'

const AddActivity: React.FC = () => {

    const history = useHistory();
    const activitiesCtxt = useContext(ActivitiesContext);
    
    const [toastMsg, setToastMsg] = useState<string>('');

    const tittleInput = useRef<HTMLIonInputElement>(null);
    const descriptionInput = useRef<HTMLIonInputElement>(null);
    const activityTypeInput = useRef<HTMLIonSegmentElement>(null);


    const addActivity = () => {
        const tittle = tittleInput.current?.value as string;
        const description = tittleInput.current?.value as string;
        const activityType = activityTypeInput.current?.value as ActivityType;
        const startDate = new Date()
        const hour = startDate.getHours().toString() + ":" + startDate.getMinutes().toString()
    
        if (tittle && description && activityType && hour) {
            activitiesCtxt.addActivity(tittle, description, hour, activityType,);
            setToastMsg('The activity has been saved!');
            history.replace('/all-activities');
        }
    
    }

    return(
        <React.Fragment>
            <IonToast isOpen={!!toastMsg} duration={4000} message={toastMsg} color="medium" onDidDismiss={() =>setToastMsg('')}/>
    
            <IonPage>
                  <IonHeader>
                      <IonToolbar>
                          <IonButtons slot="start">
                              <IonMenuButton/>
                          </IonButtons>
                          <IonTitle>Add Activity</IonTitle>
                      </IonToolbar>
                  </IonHeader>
                  <IonContent>
                          <IonGrid>
                              <IonRow>
                                  <IonCol className='ion-text-center'>
                                      <IonSegment ref={activityTypeInput}>
                                          <IonSegmentButton value='programing'>
                                              <IonLabel>PROGRAMING</IonLabel>
                                          </IonSegmentButton>
                                          <IonSegmentButton value='life'>
                                              <IonLabel>LIFE</IonLabel>
                                          </IonSegmentButton>
                                          <IonSegmentButton value='hobby'>
                                              <IonLabel>HOBBY</IonLabel>
                                          </IonSegmentButton>
                                      </IonSegment>
                                  </IonCol>
                              </IonRow>
                              <IonRow>
                                  <IonCol>
                                      <IonItem>
                                          <IonLabel position='floating'>
                                              Activity title
                                          </IonLabel>
                                          <IonInput ref={tittleInput} type='text'></IonInput>
                                      </IonItem>
                                  </IonCol>
                              </IonRow>
                              <IonRow>
                                  <IonCol>
                                      <IonItem>
                                          <IonLabel position='floating'>
                                              Activity description
                                          </IonLabel>
                                          <IonInput ref={descriptionInput}type='text'></IonInput>
                                      </IonItem>
                                  </IonCol>
                              </IonRow>
                              <IonRow>
                                  <IonCol className='ion-text-center ion-margin-top'>
                                      <IonButton onClick={addActivity} expand='block' fill='outline'>
                                          Add activity
                                      </IonButton>
                                  </IonCol>
                              </IonRow>
                          </IonGrid>
                      </IonContent>
            </IonPage>  
        </React.Fragment>
    );
};

export default AddActivity;
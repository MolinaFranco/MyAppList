import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonIcon, IonItem, IonMenuButton, IonModal, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import React, {useContext, useState} from 'react';
import {IonHeader} from '@ionic/react'
import ActivitiesContext, { Activity } from '../data/activities-context';
import {checkboxOutline, checkmarkOutline} from 'ionicons/icons';
import CompleteModalActivity from '../components/CompleteModal';

const AllActivities= () =>{

    const activitiesCtxt = useContext(ActivitiesContext);

    const[activityToComplete, setActivityToComplete] = useState<Activity>()

    const openCompleteModal = (activity:Activity) =>{
        setActivityToComplete(activity);
    }

    const closeModal = () =>{
        setActivityToComplete(undefined);
    }

    return(
        <React.Fragment>
            <IonModal isOpen={!!activityToComplete} swipeToClose={true}>
                <CompleteModalActivity activity={activityToComplete as Activity} dismissModal={closeModal}></CompleteModalActivity>
            </IonModal>
            <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton/>
                    </IonButtons>
                    <IonTitle>All Activities</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {activitiesCtxt.activities.map(activity => (
                        <IonRow key={activity.id}>
                            <IonCol className='ion-text-center'>
                                <IonCard>
                                    <img src={activity.imageUrl} alt='Activity'/>
                                    <IonCardHeader>
                                        <IonCardSubtitle>{activity.hour}</IonCardSubtitle>
                                        <IonCardTitle>{activity.tittle}</IonCardTitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{activity.description}</p>
                                        <IonItem lines="none">
                                            { !activity.isCompleted ?
                                            <IonButton fill="clear" onClick={() => openCompleteModal(activity)}>
                                                <IonIcon size="small" color="medium" slot="start" icon={checkboxOutline}></IonIcon>
                                            </IonButton>
                                            :
                                            <IonIcon color="success" icon={checkmarkOutline} />
                                            }
                                        </IonItem>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonRow>   
                      ))
                    }
                </IonGrid>
            </IonContent>
      </IonPage>  
        </React.Fragment>
    );
};

export default AllActivities
import React, { useContext } from 'react';
import { IonContent, IonGrid, IonRow, IonCol, IonImg, IonText, IonButton } from '@ionic/react';
import ActivitiesContext, { Activity } from '../data/activities-context';

interface DeleteModalActivityProps {
    activity: Activity;
    dismissModal: () => void;
}

const DeleteModalActivity: React.FC<DeleteModalActivityProps> = (props) => {

    const activitiesCtxt = useContext(ActivitiesContext);

    const confirmDelete = (activityId: string) => {
        activitiesCtxt.deleteActivity(activityId);
        props.dismissModal();
    };

    return (
        <IonContent>
            <IonGrid className='ion-no-padding'>
                <IonRow>
                    <IonCol className='ion-no-padding'>
                        <IonImg src={props.activity.imageUrl} />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonText>
                            <h2>{props.activity.tittle}</h2>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center ion-no-padding'>
                        <IonText color='medium'>
                            <p>
                                Are you sure you want to delete this activity?
                            </p>
                        </IonText>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol className='ion-text-center'>
                        <IonButton color='danger' fill='outline' onClick={props.dismissModal}>
                            Cancel
                        </IonButton>
                    </IonCol>
                    <IonCol className='ion-text-center'>
                        <IonButton color='primary' fill='outline' onClick={() => confirmDelete(props.activity.id)}>
                            Delete
                        </IonButton>
                    </IonCol>
                </IonRow>
            </IonGrid>
        </IonContent>
    );
};

export default DeleteModalActivity;

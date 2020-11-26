import { key } from 'ionicons/icons';
import React, { useState } from 'react';

import ActivitiesContext, { ActivitiesContextModel, Activity, ActivityType } from './activities-context'

const ActivitiesContextProvider: React.FC = (props) => {
    
    const [activities,setActivities] = useState<Activity[]>(
        [
            {
                id: Math.random().toString(),
                tittle: 'Aplicacion',
                description: 'tenes que hacer la app',
                hour: '20:00',
                activityType: 'programing',
                imageUrl: './assets/images/coding.png',
                isCompleted: false,
            },
            {
                id: Math.random().toString(),
                tittle: 'Ingles',
                description: 'lo de ingles pal viernes',
                hour: '20:02',
                activityType: 'hobby',
                imageUrl: './assets/images/vida.jpeg',
                isCompleted: false,
            },
            {
                id: Math.random().toString(),
                tittle: 'Guitarra',
                description: 'transcribir cuaderno',
                hour: '20:04',
                activityType: 'hobby',
                imageUrl: './assets/images/random.jpg',
                isCompleted: false,
            }
        ]
    );

    const addActivity = (tittle: string, description: string,hour: string, activityType:ActivityType) => {
        let imageUrl = '';
        switch(activityType){
            case 'hobby':
                imageUrl = '/assets/images/random.jpg'
                break;
            case 'life':
                imageUrl = '/assets/images/vida.jpeg'
                break;
            case 'programing':
                imageUrl = '/assets/images/coding.png'
                break;
            default:
                imageUrl = '/assets/images/coding.png'
                break;
        };         

        const addActivity: Activity = {
            id: Math.random().toString(),
            tittle,
            description,
            hour,
            activityType,
            imageUrl,
            isCompleted: false,
        };

        setActivities(currActivities => {
            return [...currActivities, addActivity]
        })
    };

    const deleteActivity = (activityId: any) => {
        setActivities(currActivities => {
            let nowActivities = [...currActivities];
            nowActivities = nowActivities.filter(act => act.id !== activityId);
            return nowActivities;
        })
    }

    const completeActivity = (activityId: string) => {
        setActivities(currActivities => {
            const updatedActivities = [...currActivities];
            const selectedActivityIndex = activities.findIndex(act => act.id === activityId);
            const updatedActivity = {...updatedActivities[selectedActivityIndex], isCompleted: true};
            updatedActivities[selectedActivityIndex] = updatedActivity;
            return updatedActivities;
        });
    };


    const activitiesContext: ActivitiesContextModel = {
        activities,
        addActivity,
        completeActivity,
        deleteActivity
    };

    return (
        <ActivitiesContext.Provider value={activitiesContext}>
            {props.children}
        </ActivitiesContext.Provider>
    );
};

export default ActivitiesContextProvider;
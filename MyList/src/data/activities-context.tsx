import React from 'react';

export type ActivityType = 'programing' | 'life' | "hobby"

export interface Activity{
    id: string;
    tittle: string;
    description: string;
    hour: string;
    activityType: ActivityType;
    imageUrl: string;
    isCompleted: boolean;
}

export interface ActivitiesContextModel {
    activities: Activity[];
    addActivity: (tittle: string,
        description: string,
        hour: string,
        activityType:ActivityType) => void;
    completeActivity: (activityId:string) => void;
    deleteActivity: (activityId:string) => void;
}

const ActivitiesContext = React.createContext<ActivitiesContextModel>({ 
    activities: [],
    addActivity: () => {},
    completeActivity: () => {},
    deleteActivity: () => {},
})

export default ActivitiesContext;
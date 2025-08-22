import React, { useEffect, useState } from 'react';
import { fetchActivities } from '../services/activitiesService';

const ActivityOptions: React.FC<{ currentDestination: string; desiredDestination: string; travelDate: string }> = ({ currentDestination, desiredDestination, travelDate }) => {
    type Activity = {
        id: string;
        name: string;
        // Add other properties as needed
    };
    
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getActivities = async () => {
            try {
                const data = await fetchActivities(currentDestination, desiredDestination, travelDate);
                setActivities(data);
            } catch (err) {
                setError('Failed to fetch activities');
            } finally {
                setLoading(false);
            }
        };

        if (currentDestination && desiredDestination && travelDate) {
            getActivities();
        }
    }, [currentDestination, desiredDestination, travelDate]);

    if (loading) {
        return <div>Loading activities...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Activities in {desiredDestination}</h2>
            <ul>
                {activities.map((activity) => (
                    <li key={activity.id}>{activity.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default ActivityOptions;
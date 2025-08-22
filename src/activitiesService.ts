import axios from 'axios';
import { Activity } from '../types';

const API_URL = 'https://api.example.com/activities'; // Replace with the actual API endpoint

export const fetchActivities = async (currentDestination: string, desiredDestination: string, date: string): Promise<Activity[]> => {
    try {
        const response = await axios.get(`${API_URL}`, {
            params: {
                currentDestination,
                desiredDestination,
                date
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching activities:', error);
        throw error;
    }
};
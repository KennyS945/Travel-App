import axios from 'axios';

const API_URL = 'https://api.example.com/flights'; // Replace with actual API URL

export const fetchFlightOptions = async (currentDestination: string, desiredDestination: string, travelDate: string) => {
    try {
        const response = await axios.get(API_URL, {
            params: {
                from: currentDestination,
                to: desiredDestination,
                date: travelDate
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching flight options:', error);
        throw error;
    }
};
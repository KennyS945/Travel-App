import axios from 'axios';
import { Hotel } from '../types';

const API_URL = 'https://api.example.com/hotels'; // Replace with actual API URL

export const fetchHotelOptions = async (currentDestination: string, desiredDestination: string, date: string): Promise<Hotel[]> => {
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
        console.error('Error fetching hotel options:', error);
        throw error;
    }
};
import React, { useEffect, useState } from 'react';
import { Hotel } from '../types';
import { fetchHotelOptions } from '../services/hotelsService'; // <-- Add this import

const HotelOptions: React.FC<{ currentDestination: string; desiredDestination: string; travelDate: string }> = ({ currentDestination, desiredDestination, travelDate }) => {
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getHotelOptions = async () => {
            try {
                setLoading(true);
                const hotelData = await fetchHotelOptions(currentDestination, desiredDestination, travelDate);
                setHotels(hotelData);
            } catch (err) {
                setError('Failed to fetch hotel options');
            } finally {
                setLoading(false);
            }
        };

        if (currentDestination && desiredDestination && travelDate) {
            getHotelOptions();
        }
    }, [currentDestination, desiredDestination, travelDate]);

    if (loading) return <div>Loading hotel options...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div>
            <h2>Available Hotels</h2>
            <ul>
                {hotels.map((hotel) => (
                    <li key={hotel.id}>
                        <h3>{hotel.name}</h3>
                        <p>{hotel.description}</p>
                        <p>Price: ${hotel.pricePerNight}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default HotelOptions;
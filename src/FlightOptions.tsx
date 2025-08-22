import React, { useEffect, useState } from 'react';
import { fetchFlightOptions } from '../services/flightsService';
import { fetchHotelOptions } from '../services/hotelsService';
// ...existing code...

// Define the Flight type (adjust fields as needed)
type Flight = {
    id: string;
    airline: string;
    price: number;
    duration: string;
};

// Define the Hotel type (adjust fields as needed)
type Hotel = {
    id: string;
    name: string;
    pricePerNight: number;
    rating: number;
};

const FlightAndHotelOptions: React.FC<{ currentDestination: string; desiredDestination: string; travelDate: string }> = ({ currentDestination, desiredDestination, travelDate }) => {
    const [flights, setFlights] = useState<Flight[]>([]);
    const [hotels, setHotels] = useState<Hotel[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const getFlightAndHotelOptions = async () => {
            try {
                setLoading(true);
                const flightOptions = await fetchFlightOptions(currentDestination, desiredDestination, travelDate);
                setFlights(flightOptions);

                const hotelOptions = await fetchHotelOptions(currentDestination, desiredDestination, travelDate);
                setHotels(hotelOptions);
            } catch (err) {
                setError('Failed to fetch flight and hotel options');
            } finally {
                setLoading(false);
            }
        };

        if (currentDestination && desiredDestination && travelDate) {
            getFlightAndHotelOptions();
        }
    }, [currentDestination, desiredDestination, travelDate]);

    if (loading) {
        return <div>Loading flight and hotel options...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h2>Available Flight and Hotel Options</h2>
            <div>
                <h3>Flights</h3>
                <ul>
                    {flights.map((flight) => (
                        <li key={flight.id}>
                            {flight.airline} - {flight.price} - {flight.duration}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3>Hotels</h3>
                <ul>
                    {hotels.map((hotel) => (
                        <li key={hotel.id}>
                            {hotel.name} - ${hotel.pricePerNight} - {hotel.rating}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FlightAndHotelOptions;


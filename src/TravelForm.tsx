import React, { useRef } from 'react';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';

interface TravelFormProps {
    currentDestination: string;
    setCurrentDestination: (value: string) => void;
    desiredDestination: string;
    setDesiredDestination: (value: string) => void;
    travelDate: string;
    setTravelDate: (value: string) => void;
    tripType: string;
    setTripType: (value: string) => void;
    travelers: number;
    setTravelers: (value: number) => void;
}

const libraries = ['places'];

const TravelForm: React.FC<TravelFormProps> = ({
    currentDestination,
    setCurrentDestination,
    desiredDestination,
    setDesiredDestination,
    travelDate,
    setTravelDate,
    tripType,
    setTripType,
    travelers,
    setTravelers
}) => {
    const { isLoaded } = useJsApiLoader({
        googleMapsApiKey: 'YOUR_GOOGLE_MAPS_API_KEY', // <-- Replace with your key
        libraries,
    });

    const fromRef = useRef<google.maps.places.Autocomplete | null>(null);
    const toRef = useRef<google.maps.places.Autocomplete | null>(null);

    const handleFromPlaceChanged = () => {
        if (fromRef.current) {
            const place = fromRef.current.getPlace();
            if (place && place.formatted_address) {
                setCurrentDestination(place.formatted_address);
            }
        }
    };

    const handleToPlaceChanged = () => {
        if (toRef.current) {
            const place = toRef.current.getPlace();
            if (place && place.formatted_address) {
                setDesiredDestination(place.formatted_address);
            }
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentDestination || !desiredDestination || !travelDate) {
            alert('Please fill in all fields.');
        }
    };

    if (!isLoaded) return <div>Loading map...</div>;

    return (
        <form
            onSubmit={handleSubmit}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '40px auto',
                padding: '32px',
                maxWidth: '500px',
                background: '#fff',
                borderRadius: '12px',
                boxShadow: '0 2px 16px rgba(0,0,0,0.08)'
            }}
        >
            <h2 style={{ marginBottom: '24px' }}>Plan Your Trip</h2>
            <div style={{ marginBottom: '16px', width: '100%' }}>
                <label style={{ width: '100%' }}>
                    From:
                    <Autocomplete
                        onLoad={autocomplete => (fromRef.current = autocomplete)}
                        onPlaceChanged={handleFromPlaceChanged}
                    >
                        <input
                            type="text"
                            value={currentDestination}
                            onChange={e => setCurrentDestination(e.target.value)}
                            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                            placeholder="Departure city/airport"
                        />
                    </Autocomplete>
                </label>
            </div>
            <div style={{ marginBottom: '16px', width: '100%' }}>
                <label style={{ width: '100%' }}>
                    To:
                    <Autocomplete
                        onLoad={autocomplete => (toRef.current = autocomplete)}
                        onPlaceChanged={handleToPlaceChanged}
                    >
                        <input
                            type="text"
                            value={desiredDestination}
                            onChange={e => setDesiredDestination(e.target.value)}
                            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                            placeholder="Destination city/airport"
                        />
                    </Autocomplete>
                </label>
            </div>
            <div style={{ marginBottom: '16px', width: '100%' }}>
                <label>
                    Trip Type:
                    <select
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                    >
                        <option value="oneway">One Way</option>
                        <option value="roundtrip">Round Trip</option>
                    </select>
                </label>
            </div>
            <div style={{ marginBottom: '16px', width: '100%' }}>
                <label>
                    Departure Date:
                    <input
                        type="date"
                        value={travelDate}
                        onChange={(e) => setTravelDate(e.target.value)}
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                    />
                </label>
            </div>
            {tripType === 'roundtrip' && (
                <div style={{ marginBottom: '16px', width: '100%' }}>
                    <label>
                        Return Date:
                        <input
                            type="date"
                            // You need to add state and setter for returnDate in your parent component
                            // value={returnDate}
                            // onChange={(e) => setReturnDate(e.target.value)}
                            style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                        />
                    </label>
                </div>
            )}
            <div style={{ marginBottom: '24px', width: '100%' }}>
                <label>
                    Travelers:
                    <select
                        value={travelers}
                        onChange={(e) => setTravelers(Number(e.target.value))}
                        style={{ width: '100%', padding: '8px', marginTop: '4px' }}
                    >
                        {[...Array(10)].map((_, i) => (
                            <option key={i + 1} value={i + 1}>
                                {i + 1}
                            </option>
                        ))}
                    </select>
                </label>
            </div>
            <button
                type="submit"
                style={{
                    padding: '12px 32px',
                    background: '#0071c2',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '6px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Search
            </button>
        </form>
    );
};

export default TravelForm;
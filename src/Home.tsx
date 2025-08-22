import React, { useState } from 'react';
import TravelForm from '../components/TravelForm';
import FlightOptions from '../components/FlightOptions';
import HotelOptions from '../components/HotelOptions';
import ActivityOptions from '../components/ActivityOptions';

const Home: React.FC = () => {
    const [currentDestination, setCurrentDestination] = useState('');
    const [desiredDestination, setDesiredDestination] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [tripType, setTripType] = useState('oneway');
    const [travelers, setTravelers] = useState(1);

    return (
        <div
            style={{
                minHeight: '100vh',
                background: 'linear-gradient(135deg, #e0f7fa 0%, #b2ebf2 100%)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center', // <-- change from 'flex-start' to 'center'
                paddingTop: 0 // <-- remove paddingTop
            }}
        >
            <h1 style={{ textAlign: 'center', color: '#0071c2', marginBottom: '32px', fontWeight: 700 }}>
                Travel Planner
            </h1>
            <TravelForm
                currentDestination={currentDestination}
                setCurrentDestination={setCurrentDestination}
                desiredDestination={desiredDestination}
                setDesiredDestination={setDesiredDestination}
                travelDate={travelDate}
                setTravelDate={setTravelDate}
                tripType={tripType}
                setTripType={setTripType}
                travelers={travelers}
                setTravelers={setTravelers}
            />
            <div style={{ width: '100%', maxWidth: '900px', margin: '0 auto', marginTop: '32px' }}>
                <FlightOptions
                    currentDestination={currentDestination}
                    desiredDestination={desiredDestination}
                    travelDate={travelDate}
                />
                <HotelOptions
                    currentDestination={currentDestination}
                    desiredDestination={desiredDestination}
                    travelDate={travelDate}
                />
                <ActivityOptions
                    currentDestination={currentDestination}
                    desiredDestination={desiredDestination}
                    travelDate={travelDate}
                />
            </div>
        </div>
    );
};

export default Home;
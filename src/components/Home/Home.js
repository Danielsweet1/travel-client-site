import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PlaceCard from '../PlaceCard/PlaceCard';

const Home = () => {
const places = useLoaderData();
console.log(places)
    return (
        <div className='grid'>
            {
                places.map(p=> <PlaceCard key={p.id} p={p}></PlaceCard>)
            }
        </div>
    );
};

export default Home;
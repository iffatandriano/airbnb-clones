'use client';

import React from 'react';
import { SafeListing, SafeUser } from '../types';
import Container from '../components/Container';
import Heading from '../components/Heading';
import ListingCard from '../components/listings/ListingCard';

interface FavoriteClientProps {
    listings: SafeListing[],
    currentUser?: SafeUser | null,
}

const FavoriteClient: React.FC<FavoriteClientProps> = ({
    listings,
    currentUser
}) => (
    <Container>
        <Heading title='Favorites' subTitle='List of places you have fovited!' />
        <div className='
                mt-10
                grid
                grid-cols-1
                sm:grid-cols-2
                md:grid-cols-3
                lg:grid-cols-3
                xl:grid-cols-5
                2xl:grid-cols-6
                gap-8
        '>
            {listings.map((listing) => (
                <ListingCard 
                    key={listing.id}
                    data={listing}
                    currentUser={currentUser}
                />
            ))}
       </div>
    </Container>
);

export default FavoriteClient;
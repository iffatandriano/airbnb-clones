import EmptyState from "../components/EmptyState";
import ClientOnly from "../components/ClientOnly";

import getCurrentUser from "../actions/getCurrentUser";

import React from 'react';
import getFavoriteListings from "../actions/getFavoriteListings";
import FavoriteClient from "./FavoriteClient";

const ListingPage = async () => {
    const currentUser = await getCurrentUser();
    const listings = await getFavoriteListings();

    if(listings.length === 0) {
        return (
            <ClientOnly>
                <EmptyState title="No favorites found" subTitle="Looks like you have no favorite listings." />
            </ClientOnly>
        )
    }

    return (
        <ClientOnly>
            <FavoriteClient 
                listings={listings}
                currentUser={currentUser}
            />
        </ClientOnly>
    );
};

export default ListingPage;
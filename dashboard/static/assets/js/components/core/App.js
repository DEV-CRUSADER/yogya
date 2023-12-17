import React from 'react';

import { Home } from './coreComponents/home';
import { Resources } from './coreComponents/resources';

export function HomePageView()  {
    return (
        <>
            <Home />
        </>
    );
}

export function ResourcesPageView()  {
    return (
        <>
            <Resources />
        </>
    );
}
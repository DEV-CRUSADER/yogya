import React from 'react';

import { Home } from './coreComponents/home';
import { Resources } from './coreComponents/resources';
import { Mutual } from './coreComponents/mutual';
import { Contact } from './coreComponents/contact';

import { ClientAuthenticationView } from '../common/accounts/base'

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

export function MutualPageView()  {
    return (
        <>
            <Mutual />
        </>
    );
}

export function ContactPageView()  {
    return (
        <>
            <Contact />
        </>
    );
}

export function ClientAuthView({ formType }) {
    return (
        <>  
            <ClientAuthenticationView formType={formType} />
        </>
    )
}
import React, { useState } from 'react';
import { ClientDataForm } from "./client_elements/form"


export function HomeView()  {


    return (
        <div className="container">
            <ClientDataForm />
        </div>
    );
}
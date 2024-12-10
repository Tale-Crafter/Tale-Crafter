import React from 'react'
import Bnavbar from '../components/bnavbar';
import BusinessHeader from '../components/BusinessHeader';
import Bemail from '../components/Bemail';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function Verifier() {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const email = queryParams.get('email'); // Retrieve email from the URL

    return (
        <div>
            <div style={{ display: 'flex' ,background:"white"}}>
                <div>
                    <BusinessHeader />
                    <Bnavbar />
                </div>

                <div className="container" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
                <main className="main">
                <section className="content" style={{ width: "50%", margin: "0 auto" }}>
                <img src={process.env.PUBLIC_URL + '/bmailing.png'} alt="Language" style={{ width: "147px", height:"147px" }} />
                <p>
                We’ve just sent you an email to: <strong>{email}</strong> Please click on the link in the email to proceed.
                </p>
                <p>
                Make sure you check your spam folder in case you don’t see it in the next few minutes.
                </p>
                </section>
                </main>
                </div>

            </div>
        </div>

    );
};
export default Verifier
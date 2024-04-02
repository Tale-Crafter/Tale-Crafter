import React from 'react'
import Bnavbar1 from '../components/bnavbar1';
import LoginOne from '../pages/login/LoginOne';
import BusinessHeader from '../components/BusinessHeader1';

function Register() {
    return (
        <div>
            <div style={{ display: 'flex' ,background:"white"}}>
                <div>
                    <BusinessHeader />
                    <Bnavbar1 />
                </div>
                <LoginOne />
            </div>
        </div>

    );
};
export default Register
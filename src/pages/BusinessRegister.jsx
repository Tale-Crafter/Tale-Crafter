import React from 'react'
import Bnavbar from '../components/bnavbar';
import BForm from '../components/bForm';
import BusinessHeader from '../components/BusinessHeader';

function Register() {
    return (
        <div>
            <div style={{ display: 'flex' ,background:"white"}}>
                <div>
                    <BusinessHeader />
                    <Bnavbar />
                </div>
                <BForm />
            </div>
        </div>

    );
};
export default Register
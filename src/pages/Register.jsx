import React from 'react'
import Form from '../components/Navbar';
import Navbar from '../components/Form';
import Header from '../components/Header';

function Register() {
    return (
        <div>
            <div style={{ display: 'flex',background:"white" }}>
                <div>
                    <Header />
                    <Navbar />
                </div>
                <Form />
            </div>
        </div>

    );
};
export default Register

import React from 'react'
import Form from '../components/Navbar';
import SubscribeForm from '../components/SubscribeForm';

import Header from '../components/Header';
import Logo_Tale from '../images/Logo_Tale.png';

function TaleCustomerSubscribe() {
    const imglogo = {
        width: '160px',
        height: 'auto',
        padding: '10px',

    }
    return (
        <div>
            <div style={{ display: 'flex',background:"white"}}>
                <div style={{width:'100%',height:'100%'}}>
                    <div>
                        <img src={Logo_Tale} alt="Logo" style={imglogo} />
                    </div>
                    <SubscribeForm />
                </div>
            </div>
        </div>

    );
};
export default TaleCustomerSubscribe

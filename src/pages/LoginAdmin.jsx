import React from 'react'
import Bnavbar1 from '../components/bnavbar1';
import LoginOne from '../pages/login/LoginOne';
import BusinessHeader from '../components/BusinessHeader1';
import LoginAdm from "./login/LoginAdm";

function Register() {
    return (
        <div>
            <div style={{ display: 'flex' ,backgroundColor: 'white !important'}}>
                <div style={{backgroundColor:"white", zIndex:999}}>
                    <BusinessHeader />
                    {/*<Bnavbar1 />*/}
                </div>

                <div style={{backgroundColor:"white"}}>

                    <LoginAdm />
                </div>
                </div>
        </div>

    );
};
export default Register

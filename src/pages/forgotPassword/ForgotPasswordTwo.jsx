import React from 'react'

import '../../styles/forgotPassword.css'
import LeftBackground from '../../components/LeftBackground'
import emailSentIcon from '../../images/emailSentIcon.png'
import { Link } from 'react-router-dom'
import { useUser } from './UserContext'


function ForgotPasswordTwo() {

    const { email } = useUser();

    return (
        <div className='forgotPassword'>
            <img src={emailSentIcon} alt='Email Sent Icon' className='emailSentIconStyle' />
            <span className="forgotPasswordTitle">Email sent</span>
            <span className="forgotPasswordInfo">We have sent you an email at <span style={{ color: '#ED1C24' }}>{email}</span>. Check your inbox and follow the instructions to reset your account password</span>

            <div className='forgotPasswordEmail'>
                <div className='didntRecieveEmail'>
                    <span>Did not recieve email? </span>
                    <span style={{ color: "#00C0FC ", fontWeight: "600", }}>
                        <Link to="/">
                            <span>Resend Email</span>
                        </Link>
                    </span>
                </div>
                <div className='wrongEmail'>
                    <span>Wrong email address? </span>
                    <span style={{ color: "#00C0FC ", fontWeight: "600", }}>
                        <Link to="/ForgotPasswordOne">
                            <span>Change email address</span>
                        </Link>
                    </span>
                </div>
            </div>

            <LeftBackground mainText={"Forget PWD?"} detailsText={"Don't worry :))"} />
        </div>
    )
}

export default ForgotPasswordTwo
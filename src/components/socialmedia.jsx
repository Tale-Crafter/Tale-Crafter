import React from 'react'

import { Link } from 'react-router-dom';

import facebook from '../images/facebook.png';
import gmail from '../images/Gmail.png';
import twitter from '../images/twitter.png';
import linkedIn from '../images/Linkedin.png';

function SocialMedia() {

    const icons = {
        display: "inline-flex",
        alignItems: "flex-start",
        gap: "16px",
        width: "272px",
        height: "56p",
        top: "180px",
        left: "713px",
        position: "absolute",
        marginRight: '12px'
    }

    return (
        <div style={icons}>
            <span>
                <Link to="https://www.facebook.com">
                    <img src={facebook} alt="Facebook" />
                </Link>
            </span>
            <span>
                <Link to="https://www.gmail.com">
                    <img src={gmail} alt="Gmail" />
                </Link>
            </span>
            <span>
                <Link to="https://www.twitter.com">
                    <img src={twitter} alt="X" />
                </Link>
            </span>
            <span>
                <Link to="https://www.linkedin.com">
                    <img src={linkedIn} alt="Linkedin" />
                </Link>
            </span>
        </div>
    )
}

export default SocialMedia
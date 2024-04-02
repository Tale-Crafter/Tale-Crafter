import React from 'react'

import { Link } from 'react-router-dom';



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
                    <img src={process.env.PUBLIC_URL + '/fbf.png'} className="rounded" alt="X" style={{width:56,height:56}}/>
                </Link>
            </span>
            <span>
                <Link to="https://www.gmail.com">
                    <img src={process.env.PUBLIC_URL + '/bmail.png'} className="rounded" alt="Facebook" style={{width:56,height:56}} />
                </Link>
            </span>
            <span>
                <Link to="https://www.twitter.com">
                    <img src={process.env.PUBLIC_URL + '/bx.png'} className="rounded" alt="Gmail" style={{width:56,height:56}}/>
                </Link>
            </span>
            <span>
                <Link to="https://www.linkedin.com">
                    <img src={process.env.PUBLIC_URL + '/bx.png'} className="rounded" alt="Gmail" style={{width:56,height:56}}/>
                </Link>
            </span>
        </div>
    )
}

export default SocialMedia
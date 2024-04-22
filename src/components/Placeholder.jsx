import React from 'react'

function Placeholder({ title, placeholderInfo, infoType }) {

    const titleStyle = {
        color: "#000",
        fontFamily: "Open Sans",
        fontSize: "14px",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: "normal",
        width: "96px",
        height: "19px",
        top: "-2px",
        position: "absolute",

    };
    const placeholderStyle = {
        width: "400px",
        height: "51px",
        flexShrink: "0",
        borderRadius: "10px",
        top: "25px",
        position: "absolute",

    };




    return (
        <div>
            <form>
                <label style={titleStyle}>{title}</label>
                <input style={placeholderStyle} placeholder={placeholderInfo} type={infoType} required />
            </form>
        </div>
    )
}

export default Placeholder

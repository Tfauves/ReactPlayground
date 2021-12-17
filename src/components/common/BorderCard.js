import React from 'react';

const BorderCard = (props) => {
    
    return(
        <div
        style={{
            border: "1px solid #171717",
            borderRadius: 5,
            margin: "10px",
            padding: "10px",
            width: "80%",
            maxWidth: 500,
            backgroundColor: "gray",
            boxShadow: '1px 1px 20px rgba(91, 91, 91, 0.5)'
        }}
        >
            {props.children}
        </div>
    )

}

export default BorderCard;
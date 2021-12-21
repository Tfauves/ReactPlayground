import React from "react";

const Button = (props) => {

    return (
        <button
        style={{
            alignSelf: 'center',
            backgroundColor: '#3343f2',
            marginLeft: 5,
            marginRight: 5,
            marginBottom: 10,
            marginTop: "50%",
            borderRadius: 10,
            fontSize: 16,
            paddingTop: 5,
            paddingBottom: 5,
            fontWeight: "bold",
            fontFamily: "sans-serif"
        }}
        >
            {props.children}
        </button>

    )
}

const styles = {
    button: {

    }
}

export default Button;
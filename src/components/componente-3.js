import React from 'react';

const Componente3 = (props) => {
    const {text, complement} = props

    return (
        <h1>{text}<span>{complement}</span></h1>
    );
}

export default Componente3;


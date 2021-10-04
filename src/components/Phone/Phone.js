import React from 'react';

const Phone = (props) => {
    const {instructor,phone} = props.number;
    return (
        <div>
            <h2>{instructor}</h2>
            <h4>Office Number: {phone}</h4>
        </div>
    );
};

export default Phone;
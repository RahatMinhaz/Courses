import React from 'react';

const Subject = (props) => {
    const { name,price,duration,instructor,level} = props.subject;
    return (
        <div>
            <h2>{name}</h2>
            <h2>By {instructor}</h2>
            <h4>Course Fee: {price} tk</h4>
            <h4>Course Duration: {duration} months</h4>
            <h3>Who's Eligible: {level}</h3>
            <button className = "btn btn-primary p-3 mt-5">Buy This Course</button>
        </div>
    );
};

export default Subject;
import React from 'react';
import './Subject.css';

const Subject = (props) => {
    const { name,price,duration,instructor,level,img} = props.subject;
    return (
        <div>
            <img className="w-75 pb-4 pt-5 image" src={img} alt="" />
            <h1>{name}</h1>
            <h3>By {instructor}</h3>
            <h4>Course Fee: {price} tk</h4>
            <h4>Course Duration: {duration} months</h4>
            <h3>Who's Eligible: {level}</h3>
            <button className = "btn btn-primary p-3 mt-5">Buy This Course</button>
        </div>
    );
};

export default Subject;
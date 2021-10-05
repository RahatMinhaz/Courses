import React, { useEffect, useState } from 'react';
import AboutDetails from '../AboutDetails/AboutDetails';
import Footer from '../Footer/Footer';
import './About.css'

const About = () => {
    const [lines, setLines] = useState([])
    useEffect(() => {
        fetch('./preview.json')
        .then (res => res.json())
        .then (data => setLines(data));
    },[])
    return (
    <div>
        <h2 className = "p-5">About Us</h2>
        <h4>We have professional and well trained tutors who'll guide you to learn different languages of your liking </h4>
        {/* Details about extra services */}
        <h2 className = "pb-5">We will provide you:</h2>
                <div className="container">
                <div className="row">
                    {
                        lines.map((line) => (<div className = "col-lg-6"><div className="box-about">
                            <AboutDetails key={line.id}
                                line={line}></AboutDetails>
                            </div></div>))
                    }
        <h2 className = "pt-5">Hope you'll join us in learning different languages</h2>
        <h1 className = "pb-5"><span className = "text-primary">Happy Learning!</span></h1>
            </div>
                </div>
        <Footer></Footer>
            </div>
    );
};

export default About;
import React from 'react';
import Footer from '../Footer/Footer';

const About = () => {
    return (
        <div>
            <h2 className = "p-5">About Us</h2>
        <h4>We have professional and well trained tutors who'll guide you to learn different languages of your liking </h4>
        <h2>We will provide you:</h2>
        <li>
            <ol>Extra time for slow learners</ol>
            <ol>Tips and tricks to excel in any languages</ol>
            <ol>Good training so you can study abroad without having a worry of learning their native languages</ol>
            <ol>Support even after end of the course</ol>
        </li>
        <h2>Hope you'll join us in learning different languages</h2>
        <h1 className = "pb-5">Happy Learning!</h1>
        <Footer></Footer>
        </div>
    );
};

export default About;
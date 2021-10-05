import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Subject from '../Subject/Subject';
import './Home.css';
const Home = () => {
    const [subjects, setSubjects] = useState([])
    useEffect(() => {
        fetch('./preview.json')
        .then (res => res.json())
        .then (data => setSubjects(data));
    },[])
    return (
        <div>
        <div className = "container">
            <h1 className = "pb-5">Welcome to <span className = "text-success">Language</span> Festival!</h1>
            <h3 className = "pb-4">Learn varities of languages from your home, in your own confort!</h3>
            <div className="services">
                {/* Courses */}
                <div className="row">
                    {
                        subjects.map((subject) => (<div className = "col-md-6"><div className="info-box">
                            <Subject key={subject.id}
                                subject={subject}></Subject>
                            </div></div>))
                    }
                </div>
            </div>
        </div>
        <Footer></Footer>
    </div>
    );
};

export default Home;
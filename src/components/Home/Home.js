import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Subject from '../Subject/Subject';
import './Home.css';
const Home = () => {
    const [subjects, setSubjects] = useState([])
    useEffect(() => {
        fetch('./fakedata.json')
        .then (res => res.json())
        .then (data => setSubjects(data));
    },[])
    return (
        <div>
        <div className = "container">
            <h1 className = "pb-5">Welcome Language Festival!</h1>
            <div className="services">
                {/* Courses */}
                <div className="row">
                    {
                        subjects.map((subject) => (<div className = "col-md-6"><div className="crs">
                            <div className="course-image"><img className="w-75 pb-4" src={subject.img} alt="" /></div>
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
import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import Subject from '../Subject/Subject';
import './Subjects.css'
const Subjects = () => {
    const [subjects, setSubjects] = useState([]);
    useEffect(() => {
        fetch('./fakedata.json')
            .then(res => res.json())
            .then(data => setSubjects(data));
    },[])
    return (
        <div>
            <div className = "container">
            <div className="services">
                <h2>Our Services</h2>
                <div className="row">
                    {
                        subjects.map((subject) => (<div className = "col-lg-6"><div className="crs">
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

export default Subjects;
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
                <h2 className = "pb-5">Our Services</h2>
                <div className="row">
                    {
                        subjects.map((subject) => (<div className = "col-lg-6"><div className="crs">
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
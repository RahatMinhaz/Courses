import React from 'react';
import Footer from '../Footer/Footer'
import './NotFound.css'
const NotFound = () => {
    return (
        <div>
            <div className = "err-footer">
            <h1 className = "text-danger">404 Page Not Found</h1>
            <h1 className = "text-danger pt-5"> :( </h1>
            </div>
        <Footer></Footer>
        </div>
    );
};

export default NotFound;
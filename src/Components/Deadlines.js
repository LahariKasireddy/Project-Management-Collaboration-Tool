// src/components/Deadlines.js
import React from 'react';
import EmployeeSidebar from './EmployeeSidebar';
// import './Deadlines.css';

const Deadlines = () => {
    return (
        <div className="employee-interface">
            <EmployeeSidebar />
            <main className="main-content">
                <h1>Deadlines</h1>
                <p>Keep track of all your upcoming deadlines.</p>
            </main>
        </div>
    );
};

export default Deadlines;

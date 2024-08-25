// src/Day.js
import React from 'react';
import { useParams } from 'react-router-dom';

function Day() {
    const { day } = useParams();

    return (
        <div>
            <h1>Day {day} of September</h1>
            <p>Content for September {day}.</p>
        </div>
    );
}

export default Day;
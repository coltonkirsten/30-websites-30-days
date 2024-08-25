// src/calendar.js

import React from 'react';
import { Link } from 'react-router-dom';
import { activeDays } from './date-index';
import './calendar.css';

function Calendar() {
    const days = Array.from({ length: 30 }, (_, i) => i + 1);

    return (
        <div className="calendar">
            {days.map(day => (
                <div key={day} className="calendar-day">
                    <div className="date-number">
                        {activeDays[day].isActive ? (
                            <Link to={`/${day}`}>{day}</Link>
                        ) : (
                            <span>{day}</span>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
}


export default Calendar;
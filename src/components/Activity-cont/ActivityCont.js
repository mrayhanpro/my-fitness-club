import React from 'react';
import './ActivityCont.css';
import Activity from '../Activity/Activity';



const ExerciseCont = () => {
    return (
        <div className='exercise-cont'>
             <h3> Select today's exercise:</h3>
             <Activity></Activity>
        </div>
    );
};

export default ExerciseCont;
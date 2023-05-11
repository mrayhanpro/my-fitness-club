import React from 'react';
import './ExerciseCont.css';
import Exercise from '../Exercise/Exercise';



const ExerciseCont = () => {
    return (
        <div className='exercise-cont'>
             <h3> Select today's exercise:</h3>
             <Exercise></Exercise>
        </div>
    );
};

export default ExerciseCont;
import React from 'react';
import './Activity.css';

const Activity = ({activity}) => {
    const {activity_name, activity_detail, for_age, time_require} = activity;
    return (
        <div className='activity-card'>
        <img src="" alt="" />
        <h4>{activity_name}</h4>
        <p>{activity_detail}</p>
        <p>for age: {for_age} </p>
        <p>time required: {time_require} </p>
        <button>Add to list</button>   
        </div>
    );
};

export default Activity;
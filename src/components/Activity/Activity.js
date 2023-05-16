import React from 'react';
import './Activity.css';

const Activity = ({activity}) => {
    const {activity_name, activity_detail, for_age, time_require, picture} = activity;
    console.log(picture);
    return (
        <div className='activity-card'>
        <img src={picture} alt="img  not found" />
         <h4>{activity_name}</h4>
        <div className='activity-details'>         
            <p>{activity_detail}</p>
            <p>for age: {for_age} </p>
            <p>time required: {time_require} </p>
        </div>   
            <button style={{textAlign: 'center'}}>Add to list</button>
        </div>
    );
};

export default Activity;
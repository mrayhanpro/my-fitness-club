import React from 'react';
import './Activity.css';

const Activity = (props) => {
    const {activity, handleAddToList} = props;
    const {activity_name, activity_detail, for_age, time_require, picture} = activity;

    const replace = () => {   
        const element = document.getElementById('add-btn');
        console.log(element);
        element.innerText = "";
        element.innerText = "Addeded";

        const activityElement = document.getElementById('add-btn');
        activityElement.innerText = " "
    }

    return (
        <div className='activity-card'>
        <img src={picture} alt="img  not found" />
         <h4>{activity_name}</h4>
        <div className='activity-details'>         
            <p>{activity_detail}</p>
            <p>for age: {for_age} </p>
            <p>time required: {time_require} Minutes </p>
        </div>   
            <button id='add-btn' onClick={
                () => {
                    handleAddToList(activity)
                    replace()
                }
            }>Add to list</button>
        </div>
    );
};

export default Activity;
import React from 'react';
import './ActivityCont.css';
import Activity from '../Activity/Activity';



const ActivityCont = ({activities}) => {



    return (
        <div className='activity-cont'>
            {activities.map(activity => <Activity key={activity.id} activity = {activity}></Activity>)}
        </div>
    );
};

export default ActivityCont;
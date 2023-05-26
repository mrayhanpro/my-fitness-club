import React from 'react';
import './ActivityCont.css';
import activities from '../../fakeData.json';
import Activity from '../Activity/Activity';

const ActivityCont = (props) => {
    const {handleAddToList} = props;

    return (
        <div className='activity-cont'>
            {activities.map(activity => <Activity
                key={activity.id} 
                activity = {activity}
                handleAddToList={handleAddToList}
             ></Activity>)}
        </div>
    );
};

export default ActivityCont;
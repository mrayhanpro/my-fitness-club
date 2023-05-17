import { useEffect, useState } from 'react';
import './App.css';
import ActivityCont from './components/Activity-cont/ActivityCont';
import Header from './components/Header/Header';
import ActivityContHeader from './components/ActivityContHeader/ActivityContHeader';
import activities from './fakeData.json';
import man from './man.jpg';

function App() {

  // const [activities, setActivities] = useState([])
  // // load data
  // useEffect(() => {
  //   fetch(fakeData)
  //   .then(res => res.json())
  //   .then(data => setActivities(data))

  // }, [])
  // console.log(activities);

  const handleAddToList = ({activity}) => {
    return console.log(activity);
  }

  
  return (
    <div className="App">
     <div className="exercise-data-cont">
        <Header></Header> 
        <ActivityContHeader></ActivityContHeader>
        <ActivityCont
          activities ={activities} 
          handleAddToList={handleAddToList}
         ></ActivityCont>
     </div>

     <div className="cal-cart">
          <div className="member">
              <div ><img src={man} alt="Not found."  /></div>
              <div className='name-n-tittle'>
                <h2>Jerome J. Diaz</h2>
                <p> <strong>Frontend Developer</strong> </p>
              </div>
          </div>
          <div className='member-data'>
                <div>
                  <p> <strong>75</strong>kg</p>
                  <p><strong>Weight</strong></p>
                </div>
                <div>
                  <p><strong>5' 7''</strong></p>
                  <p><strong>Height</strong></p>
                </div>
                <div>
                  <p> <strong>35</strong>yrs</p>
                  <p><strong>Age</strong></p>
                </div>
          </div>
          <h3 className='break-section-header'>Add a break</h3>
          <div className='break-data'>
                <p>05min</p>
                <p>10min</p>
                <p>15min</p>
                <p>20min</p>
                <p>25min</p>
                <p>30min</p>
          </div>
              <h3 className='activity-details'>Exercise details:</h3>
          <div className="activity-details">
                <div className='activity-time-data'>
                  <p>Exercise time:</p>
                  <p>0</p>
                </div>
                <br />
                <div className='break-time-data'>
                  <p> Break time:</p>
                  <p>0</p>
                </div>
          </div>

          <button className='activity-done-btn'>Activity completed</button>

          
     </div>
    </div>
  );
}

export default App ;



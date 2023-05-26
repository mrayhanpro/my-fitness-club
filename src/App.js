import {useState } from 'react';
import './App.css';
import ActivityCont from './components/Activity-cont/ActivityCont';
import Header from './components/Header/Header';
import ActivityContHeader from './components/ActivityContHeader/ActivityContHeader';
import activities from './fakeData.json';
import man from './man.jpg';

function App() {

  // Declaring the state for the activity dat:
  const [activityData, setActivityData] = useState([]);
  const {time_require} = activityData;

  const handleAddToList = (activity) => {
    setActivityData(activity)
  }

  // Set break time and its color:
  const setBreakTime = (id) => {  
    const getSelectedBreakTime = document.getElementById(id).innerText;
    document.getElementById(id).style.background = "red";
    document.getElementById(id).style.color = "white";

    const breakTimeElementValue = document.getElementById('break-time');
    breakTimeElementValue.innerText = "";
    breakTimeElementValue.innerText = getSelectedBreakTime;
    return  console.log(id);
  }


  return (

    <div className="App">

     <div className="activity-data-cont">
        <Header></Header> 
        <ActivityContHeader></ActivityContHeader>
        <ActivityCont
            activities ={activities} 
            handleAddToList={handleAddToList}
         ></ActivityCont>
     </div>

{/* The section of Calculation cart: */}
     <div className="cal-cart">
        {/* code for member and member data: */}
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

          {/* The break time section codes: */}
          <h3 className='break-section-header'>Add a break</h3>
          <div className='break-data'>
                <p id={1} onClick={ () => setBreakTime(1)}>05 Min</p>
                <p id={2} onClick={ () => setBreakTime(2)}>10 Min</p>
                <p id={3} onClick={ () => setBreakTime(3)}>15 Min</p>
                <p id={4} onClick={ () => setBreakTime(4)}>20 Min</p>
                <p id={5} onClick={ () => setBreakTime(5)}>25 Min</p>
                <p id={6} onClick={ () => setBreakTime(6)}>30 Min</p>
          </div>

          {/* The activity details section codes: */}
              <h3 className='activity-details-header'>Activity details:</h3>
          <div className="activity-details">
                <div className='activity-time-data'>
                  <p>Activity time:</p>
                  <p  className='time'>{time_require}</p>
                </div>
                <br />
                <div className='break-time-data'>
                  <p> Break time:</p>
                  <p id='break-time' className='time'></p>
                </div>
                <br />
                <div className='activity-time-data'>
                  <p> <span className='total-time'>Total needed time</span>:</p>
                  <p id='total-time' className='time'>0</p>
                </div>
          </div>

{/* The code of the activity button: */}
          <button className='activity-done-btn'>Activity completed</button>
     </div>
    </div>
  );
}

export default App ;



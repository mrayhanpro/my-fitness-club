import {React, useEffect, useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css' 
import './App.css';
import Header from './components/Header/Header';
import ActivityContHeader from './components/ActivityContHeader/ActivityContHeader';
import ActivityCont from './components/Activity-cont/ActivityCont';
import man from './man.jpg';

function App() {
// Declaring the state for the activity details section:
  const [requiredActivityTime, setRequiredActivityTime] = useState([]);
  const [breakTime, setBreakTime] = useState([]);
  const [breakTimeAndIdData, setBreakTimeAndIdData]  = useState([]);

//  for add to list button:
  const handleAddToList = (activity) => {
    const newActivityData = [...requiredActivityTime, activity.time_require]
    setRequiredActivityTime(newActivityData);
}

// Code for adding break time and its color:
const addBreakTimeAndColor = (id) => {
  const getSelectedBreakTimeElement = document.getElementById(id);
  getSelectedBreakTimeElement.style.backgroundColor = 'blue'
  getSelectedBreakTimeElement.style.color = 'white';
  const SelectedBreakTime = document.getElementById(id).innerText;
  const newBreaktime = [...breakTime, SelectedBreakTime];
  setBreakTime(newBreaktime);
  addToLocalStorage(id, SelectedBreakTime)
}

const addToLocalStorage = (breakTimeElementId, breakTime) => {
  const BreakTimeAndId = {id:breakTimeElementId, time: breakTime};
  const newBreakTimeAndIdData = [...breakTimeAndIdData, BreakTimeAndId]
  setBreakTimeAndIdData(newBreakTimeAndIdData);
}

const breakTimeCart = [...breakTimeAndIdData]
localStorage.setItem('breakTimeCart', JSON.stringify(breakTimeCart));


// Code for showing the greeting for completing selected activities:
const showGreeting = (id) => {
  // code for changing the content of the btn and its color:
  const completeActivityBtn = document.getElementById(id);
  completeActivityBtn.style.backgroundColor = 'rgb(185, 248, 91)'
  completeActivityBtn.innerText = '';
  completeActivityBtn.innerText = "Completed!😍";

   // code for showing the greetings as toast:
   const showToastMessege = () => {
    toast.success("Congratulation! You did it.", { position: toast.POSITION.TOP_CENTER});
  }
  showToastMessege();

}
return (

    <div className="App">
      <div className="activity-data-cont">
        <ToastContainer></ToastContainer>
          <Header></Header> 
          <ActivityContHeader></ActivityContHeader>
          <ActivityCont
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
          <h3 className='break-section-header'>Add a break (Min):</h3>
          <div className='break-data'>
                <p id='a' onClick={() =>addBreakTimeAndColor('a')}> 05 </p>
                <p id='b' onClick={() =>addBreakTimeAndColor('b')}> 10 </p>
                <p id='c' onClick={() =>addBreakTimeAndColor("c")}> 15 </p>
                <p id='d' onClick={() =>addBreakTimeAndColor('d')}> 20 </p>
                <p id='e' onClick={() =>addBreakTimeAndColor('e')}> 25 </p>
                <p id='f' onClick={() =>addBreakTimeAndColor('f')}> 30 </p>
          </div>

          {/* The activity details section codes: */}
              <h3 className='activity-details-header'>Activity details:</h3>
          <div className="activity-details">
                <div className='total-activity-time'>
                  <p>Required time =</p>
                  <p  className='time'><span id='required-activity-time'>{
                  
                         requiredActivityTime.reduce((p, c)=> +p + +c, 0)
      
                  }</span> Min</p>
                </div>
                <br />
                <div className='total-break-time'>
                  <p> Break time =</p>
                  <p  className='time'> <span id='break-time'>{
                      breakTime.reduce((p, c) => +p + +c , 0)
                  }</span> Min</p>
                </div>
                <br />
                <div className='total-need-time'>
                  <p> <span className='total-time-tittle'>Total needed time</span>: </p>
                  <p className='time'><span id='total-time'> {
                             requiredActivityTime.reduce((p, c)=> +p + +c, 0) + breakTime.reduce((p, c) => +p + +c , 0)
                  } </span> Min</p>
                </div>
          </div>

{/* The code of the activity button: */}
          <button id='complete' onClick={() => showGreeting('complete')} className='activity-done-btn'>Activity completed</button>
          <button id='again' onClick={() => window.location.reload()} className='try-again-btn'>Click here to try again</button>
     </div>
    </div>
  );
}

export default App ;



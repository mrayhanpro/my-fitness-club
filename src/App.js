
import { useEffect } from 'react';
import './App.css';
import ExerciseCont from './components/Exercise-cont/ExerciseCont';
import Header from './components/Header/Header';
import fackData from './fackData.json'

function App() {

  // load data
  useEffect(() => {
    fetch(fackData)
    .then(res => res.json())
    .then(data => console.log(data))

  }, [])

  return (
    <div className="App">
     <div className="exercise-data-cont">
        <Header></Header> 
        <ExerciseCont></ExerciseCont>
     </div>

     <div className="cal-cart">
          <div className="member">
              <div><img src="" alt="" srcset="" /></div>
              <div>
                <h3>name</h3>
                <p>Title</p>
              </div>
          </div>
          <div className='member-data'>
                <div>
                  <p> kg</p>
                  <p>Weight</p>
                </div>
                <div>
                  <p></p>
                  <p>height</p>
                </div>
                <div>
                  <p> yrs</p>
                  <p>age</p>
                </div>
          </div>
              <h3>Add a break</h3>
          <div className='break-data'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
          </div>
              <h3>Exercise details:</h3>
          <div className="exercise-details">
                <div className='exercise-time-data'>
                  <p>Lorem ipsum dolor sit.</p>
                  <p>13xxxxx</p>
                </div>
                <div className='break-time-data'>
                  <p>Lorem ipsum dolor sit amet.</p>
                  <p>123xxxxx</p>
                </div>
          </div>

          <button className='activity-done-btn'>Activity completed</button>

          
     </div>
    </div>
  );
}

export default App;

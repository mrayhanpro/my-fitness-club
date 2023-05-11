
import './App.css';
import Exercise from './components/Exercise/Exercise';
import Header from './components/Header/Header';

function App() {

  return (
    <div className="App">
     <div className="exercise-cont">
      <Header></Header> 
      <h3> Select today's exercise:</h3>
      <div className='exercise-card-cont'>
          <Exercise></Exercise>
      </div>
     </div>

     <div className="cal-cart">

     </div>
    </div>
  );
}

export default App;

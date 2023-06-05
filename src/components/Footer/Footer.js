import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <h1>Common <span style={{color: "orange"}}>Questions</span>  and their <span style={{color: "green"}}>Answers</span>:</h1>

           <div className="qna">
            <div className="question-1">
                    <h3>How does react work?</h3>
                    <h4>Ans:</h4>
                    <p>Based on our code, React  first creates a virtual DOM( Document Object Model) which is the same as the browser DOM but located in the memory. Each time we change our code, React changes the virtual DOM pararally. And then, before upgrading the UI React compares its own virtual DOM with the browser DOM and sees what changes have been made. According to the changes, React changes the browser DOM. React does not change or replace the whole virtual DOM with browser DOM, it only changes the browser DOM  with the changes that have been made last time.  </p>
                    
                </div>
                <div className="question-2">
                    <h3 > What is the difference between "state and props" ?</h3>
                    <h4>Ans:</h4>
                    <p>Here is the differences between State and Props:
                    The difference comes in which component the data are owned. State is owned locally and the component itself updates it. Props are owned and read-only by a parent. Props can be changed only if an upstream shift is caused by a callback function passed on to the child. While both hold information that influences the output of render, they are different in one important way: props get passed to the component (similar to function parameters) whereas state is managed within the component (similar to variables declared within a function).
                    </p>
                    
                </div>
                <div className="question-3">
                    <h3>What are the usages of useEffect hook?</h3>
                    <h4>Ans:</h4>
                    <p> Here are some different use cases of React hook use useEffect: <br />

                        Running once on mount: fetch API data <br />
                        Running on state change: validating input field <br />
                        Running on state change: live filtering <br />
                        Running on state change: trigger animation on new array value <br />
                        Running on props change: update paragraph list on fetched API data update <br />
                        Running on props change: updating fetched API data to get BTC updated price <br />
                    </p>
                </div>
           </div>

        </div>
    );
};

export default Footer;
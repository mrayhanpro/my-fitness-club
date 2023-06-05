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
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, sunt vel cumque fugiat aliquam delectus corrupti nobis dolores, doloremque excepturi natus distinctio soluta ut debitis! Corporis iusto repellendus ullam fugiat molestiae hic voluptate qui. Sed, saepe laborum ullam, nobis labore, rem delectus tempora reiciendis nisi odit vitae? Asperiores, odio perspiciatis.</p>
                    
                </div>
                <div className="question-2">
                    <h3 > What is the difference between "state and props" ?</h3>
                    <h4>Ans:</h4>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem autem, ipsum voluptatibus quasi natus odit labore aliquam amet doloribus sequi accusamus, nam consectetur corrupti. Ipsum unde pariatur eum labore nihil ut perferendis repellat? Hic aliquid reiciendis id dolor repellendus fugiat pariatur. Sequi eaque debitis molestias inventore asperiores quibusdam fugiat accusamus?</p>
                    
                </div>
                <div className="question-3">
                    <h3>What are the usages of useEffect hook?</h3>
                    <h4>Ans:</h4>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque temporibus doloribus vel fugiat animi magnam rem beatae, in minus mollitia laboriosam nisi, amet deserunt corporis totam? Nemo rerum facere ipsa ullam obcaecati. Distinctio similique optio tempore, perferendis voluptatibus eum asperiores eveniet deleniti vero corrupti cupiditate veniam consectetur, earum natus nobis?</p>
                </div>
           </div>

        </div>
    );
};

export default Footer;
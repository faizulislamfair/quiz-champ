import React from 'react';
import './QuizOptions.css';


const QuizOptions = (props) => {
    const { option, iconPress, correctAnswer } = props;
    //console.log(option);


    return (
        <div>
            <div onClick={() => iconPress(props)} className='quizItems'>
                {option}
            </div>
        </div>

    );
};

export default QuizOptions;
import React from 'react';
import './TopicDetailsQuestions.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons'
import QuizOptions from './../QuizOptions/QuizOptions';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const TopicDetailsQuestions = ({ questionName }) => {
    const { options, id, question, correctAnswer } = questionName;
    //console.log(questionName);
    //console.log(correctAnswer);


    const iconPress = (x) => {
        const a = x.option;
        const b = x.correctAnswer;

        if (a === b) {
            //console.log('right');
            const message = 'Congratulations, your answer is correct!';
            toast(message);
            console.log(message);
        } else {
            const message = 'Sorry, your answer is wrong!';
            toast(message);
            console.log(message);
        }

    }


    const answerDisplay = () => {
        console.log(correctAnswer);
        toast(correctAnswer);
    }


    return (
        <div className='container carded'>

            <h4>Quiz ID: {id}</h4>

            <div className='questionAndIcon'>
                <h4>Question: {question}</h4>
                <FontAwesomeIcon onClick={() => answerDisplay(correctAnswer)} className='icon' icon={faEye}></FontAwesomeIcon>
            </div>

            {
                options.map(option => <QuizOptions
                    option={option}
                    iconPress={iconPress}
                    correctAnswer={correctAnswer}
                ></QuizOptions>)
            }

            <ToastContainer></ToastContainer>

        </div>
    );
};

export default TopicDetailsQuestions;
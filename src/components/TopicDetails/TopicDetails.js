import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TopicDetailsQuestions from '../TopicDetailsQuestions/TopicDetailsQuestions';
import './TopicDetails.css';

const TopicDetails = () => {
    const topic = useLoaderData();
    const topicDetails = topic.data;
    //console.log(topicDetails);
    const questions = topicDetails.questions;

    return (
        <div className='topicDetails'>
            <h1>Quiz of {topicDetails.name}</h1>
            {
                questions.map(questionName => <TopicDetailsQuestions
                    key={questionName.id}
                    questionName={questionName}
                ></TopicDetailsQuestions>)
            }
        </div>
    );
};

export default TopicDetails;